import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { open } from 'sqlite';
import sqlite3 from 'sqlite3';
import { authRouter } from './routes/auth.js';
import { reviewsRouter } from './routes/reviews.js';
import { propertiesRouter } from './routes/properties.js';
import { initializeDatabase } from './db/init.js';
import { runMigrations } from './db/migrations.js';
import { errorHandler } from './middleware/errorHandler.js';
import { rateLimiter } from './middleware/rateLimiter.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// CORS configuration
app.use(cors({
  origin: process.env.CORS_ORIGIN || '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());
app.use(rateLimiter);

// Database setup
let db;
async function setupDatabase() {
  db = await open({
    filename: './server/db/database.sqlite',
    driver: sqlite3.Database
  });

  // Initialize tables and run migrations
  await initializeDatabase(db);
  await runMigrations(db);

  // Make db available in request object
  app.use((req, res, next) => {
    req.db = db;
    next();
  });
}

// Routes
app.use('/api/auth', authRouter);
app.use('/api/reviews', reviewsRouter);
app.use('/api/properties', propertiesRouter);

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'healthy' });
});

// Error handling
app.use(errorHandler);

// Start server
async function startServer() {
  try {
    await setupDatabase();
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
}

startServer();