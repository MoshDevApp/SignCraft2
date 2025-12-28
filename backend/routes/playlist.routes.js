const router = require("express").Router();
const ctrl = require("../controllers/playlist.controller");
const auth = require("../middlewares/auth.middleware");

router.post("/", auth(["admin", "editor"]), ctrl.create);
router.get("/", auth(), ctrl.getAll);
router.post("/item", auth(["admin", "editor"]), ctrl.addItem);
router.delete("/:id", auth(["admin"]), ctrl.remove);

module.exports = router;
