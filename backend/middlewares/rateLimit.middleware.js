/**
 * Simple in-memory rate limiter
 * (used later for Gemini AI protection)
 */
const limits = new Map();

module.exports = (max = 10, windowMs = 60000) => {
  return (req, res, next) => {
    const ip = req.ip;
    const now = Date.now();

    if (!limits.has(ip)) limits.set(ip, []);
    const timestamps = limits.get(ip).filter(t => now - t < windowMs);

    timestamps.push(now);
    limits.set(ip, timestamps);

    if (timestamps.length > max) {
      return res.status(429).json({ message: "Rate limit exceeded" });
    }
    next();
  };
};
