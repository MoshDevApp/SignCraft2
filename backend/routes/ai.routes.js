const express = require("express");
const router = express.Router();

const aiController = require("../controllers/ai.controller");

// ✅ THESE MUST BE REAL FUNCTIONS
router.post("/generate", aiController.generate);
router.post("/diagnose", aiController.diagnose);

module.exports = router;
