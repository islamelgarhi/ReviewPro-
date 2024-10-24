import jwt from 'jsonwebtoken';

export class AuthError extends Error {
  constructor(message) {
    super(message);
    this.type = 'auth';
  }
}

export function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return next(new AuthError('Authentication required'));
  }

  try {
    const user = jwt.verify(token, process.env.JWT_SECRET);
    req.user = user;
    next();
  } catch (error) {
    next(new AuthError('Invalid or expired token'));
  }
}