const router = require("express").Router();
const ctrl = require("../controllers/schedule.controller");
const auth = require("../middlewares/auth.middleware");

router.post("/", auth(["admin"]), ctrl.create);
router.get("/screen/:screenId", auth(), ctrl.getByScreen);

module.exports = router;
