import express from 'express';
import { authenticateToken } from '../middleware/auth.js';
import { z } from 'zod';

const router = express.Router();

const reviewSchema = z.object({
  propertyId: z.number(),
  platformReviewId: z.string(),
  rating: z.number().min(1).max(5),
  content: z.string(),
  reviewerName: z.string()
});

const responseSchema = z.object({
  content: z.string().min(1),
  status: z.enum(['draft', 'submitted'])
});

// Get all reviews for authenticated user
router.get('/', authenticateToken, async (req, res) => {
  try {
    const reviews = await req.db.all(`
      SELECT r.*, p.name as property_name, 
             rr.content as response_content, rr.status as response_status
      FROM reviews r
      JOIN properties p ON r.property_id = p.id
      JOIN users u ON p.user_id = u.id
      LEFT JOIN review_responses rr ON r.id = rr.review_id
      WHERE u.id = ?
      ORDER BY r.created_at DESC
    `, [req.user.userId]);
    
    res.json(reviews);
  } catch (error) {
    next(error);
  }
});

// Create new review
router.post('/', authenticateToken, async (req, res, next) => {
  try {
    const data = reviewSchema.parse(req.body);
    
    const property = await req.db.get(
      'SELECT * FROM properties WHERE id = ? AND user_id = ?',
      [data.propertyId, req.user.userId]
    );

    if (!property) {
      return res.status(404).json({ error: 'Property not found' });
    }

    const result = await req.db.run(`
      INSERT INTO reviews (
        property_id, platform_review_id, rating, 
        content, reviewer_name, status
      ) VALUES (?, ?, ?, ?, ?, ?)
    `, [
      data.propertyId,
      data.platformReviewId,
      data.rating,
      data.content,
      data.reviewerName,
      'pending'
    ]);

    res.status(201).json({ id: result.lastID });
  } catch (error) {
    next(error);
  }
});

// Add response to review
router.post('/:reviewId/responses', authenticateToken, async (req, res, next) => {
  try {
    const { reviewId } = req.params;
    const data = responseSchema.parse(req.body);

    const review = await req.db.get(`
      SELECT r.* FROM reviews r
      JOIN properties p ON r.property_id = p.id
      WHERE r.id = ? AND p.user_id = ?
    `, [reviewId, req.user.userId]);

    if (!review) {
      return res.status(404).json({ error: 'Review not found' });
    }

    const result = await req.db.run(`
      INSERT INTO review_responses (review_id, content, status)
      VALUES (?, ?, ?)
    `, [reviewId, data.content, data.status]);

    res.status(201).json({ id: result.lastID });
  } catch (error) {
    next(error);
  }
});

// Request review removal
router.post('/:reviewId/removal-request', authenticateToken, async (req, res, next) => {
  try {
    const { reviewId } = req.params;

    const review = await req.db.get(`
      SELECT r.* FROM reviews r
      JOIN properties p ON r.property_id = p.id
      WHERE r.id = ? AND p.user_id = ?
    `, [reviewId, req.user.userId]);

    if (!review) {
      return res.status(404).json({ error: 'Review not found' });
    }

    await req.db.run(`
      UPDATE reviews 
      SET status = 'removal_requested'
      WHERE id = ?
    `, [reviewId]);

    res.json({ message: 'Removal request submitted' });
  } catch (error) {
    next(error);
  }
});

export const reviewsRouter = router;