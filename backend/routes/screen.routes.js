const router = require("express").Router();
const ctrl = require("../controllers/screen.controller");
const auth = require("../middlewares/auth.middleware");

router.post("/", auth(["admin"]), ctrl.create);
router.get("/", auth(), ctrl.getAll);
router.put("/:id", auth(["admin"]), ctrl.update);
router.delete("/:id", auth(["admin"]), ctrl.remove);

module.exports = router;
