const rateLimit = new Map();

export function rateLimiter(req, res, next) {
  const ip = req.ip;
  const now = Date.now();
  const windowMs = 15 * 60 * 1000; // 15 minutes
  const maxRequests = 100;

  const requestLog = rateLimit.get(ip) || [];
  const windowStart = now - windowMs;

  // Filter out old requests
  const recentRequests = requestLog.filter(time => time > windowStart);

  if (recentRequests.length >= maxRequests) {
    return res.status(429).json({
      error: 'Too many requests, please try again later'
    });
  }

  recentRequests.push(now);
  rateLimit.set(ip, recentRequests);

  next();
}