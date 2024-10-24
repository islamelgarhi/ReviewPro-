import express from 'express';
import { authenticateToken } from '../middleware/auth.js';
import { z } from 'zod';

const router = express.Router();

const propertySchema = z.object({
  platform: z.enum(['airbnb', 'vrbo', 'booking', 'yelp', 'google']),
  propertyId: z.string(),
  name: z.string().min(2)
});

// Get all properties for authenticated user
router.get('/', authenticateToken, async (req, res, next) => {
  try {
    const properties = await req.db.all(`
      SELECT p.*, 
             COUNT(DISTINCT r.id) as review_count,
             AVG(r.rating) as average_rating
      FROM properties p
      LEFT JOIN reviews r ON p.id = r.property_id
      WHERE p.user_id = ? AND p.status = 'active'
      GROUP BY p.id
      ORDER BY p.created_at DESC
    `, [req.user.userId]);
    
    res.json(properties);
  } catch (error) {
    next(error);
  }
});

// Create new property
router.post('/', authenticateToken, async (req, res, next) => {
  try {
    const data = propertySchema.parse(req.body);
    
    const result = await req.db.run(`
      INSERT INTO properties (user_id, platform, property_id, name)
      VALUES (?, ?, ?, ?)
    `, [req.user.userId, data.platform, data.propertyId, data.name]);

    res.status(201).json({ id: result.lastID });
  } catch (error) {
    next(error);
  }
});

// Update property
router.put('/:id', authenticateToken, async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = propertySchema.parse(req.body);

    const property = await req.db.get(
      'SELECT * FROM properties WHERE id = ? AND user_id = ?',
      [id, req.user.userId]
    );

    if (!property) {
      return res.status(404).json({ error: 'Property not found' });
    }

    await req.db.run(`
      UPDATE properties 
      SET platform = ?, property_id = ?, name = ?
      WHERE id = ?
    `, [data.platform, data.propertyId, data.name, id]);

    res.json({ message: 'Property updated successfully' });
  } catch (error) {
    next(error);
  }
});

// Delete property (soft delete)
router.delete('/:id', authenticateToken, async (req, res, next) => {
  try {
    const { id } = req.params;

    const property = await req.db.get(
      'SELECT * FROM properties WHERE id = ? AND user_id = ?',
      [id, req.user.userId]
    );

    if (!property) {
      return res.status(404).json({ error: 'Property not found' });
    }

    await req.db.run(`
      UPDATE properties 
      SET status = 'deleted'
      WHERE id = ?
    `, [id]);

    res.json({ message: 'Property deleted successfully' });
  } catch (error) {
    next(error);
  }
});

export const propertiesRouter = router;