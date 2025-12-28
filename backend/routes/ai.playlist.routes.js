const router = require("express").Router();
const ctrl = require("../controllers/ai.playlist.controller");
const rateLimit = require("../middlewares/rateLimit.middleware");

router.post("/optimize", rateLimit(5), ctrl.optimize);

module.exports = router;
