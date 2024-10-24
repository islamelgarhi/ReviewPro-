import { ZodError } from 'zod';

export function errorHandler(err, req, res, next) {
  console.error(err);

  if (err instanceof ZodError) {
    return res.status(400).json({
      error: 'Validation error',
      details: err.errors
    });
  }

  if (err.type === 'auth') {
    return res.status(401).json({
      error: err.message
    });
  }

  res.status(500).json({
    error: 'Internal server error'
  });
}