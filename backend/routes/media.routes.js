const router = require("express").Router();
const upload = require("../middlewares/upload.middleware");
const ctrl = require("../controllers/media.controller");
const auth = require("../middlewares/auth.middleware");

router.post("/", auth(["admin", "editor"]), upload.single("file"), ctrl.upload);
router.get("/", auth(), ctrl.list);

module.exports = router;
