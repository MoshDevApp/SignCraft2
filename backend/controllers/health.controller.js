/**
 * Health check endpoint
 */
exports.health = (_, res) => {
  res.json({
    status: "OK",
    service: "SignCraft Backend",
    timestamp: new Date()
  });
};
