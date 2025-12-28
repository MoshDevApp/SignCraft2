/**
 * Protects routes using JWT
 */
const { verifyToken } = require("../utils/jwt");

module.exports = (roles = []) => {
  return (req, res, next) => {
    try {
      const token = req.headers.authorization?.split(" ")[1];
      if (!token) return res.status(401).json({ message: "No token" });

      const decoded = verifyToken(token);

      if (roles.length && !roles.includes(decoded.role)) {
        return res.status(403).json({ message: "Forbidden" });
      }

      req.user = decoded;
      next();
    } catch {
      res.status(401).json({ message: "Invalid token" });
    }
  };
};
