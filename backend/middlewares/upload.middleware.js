/**
 * Multer file upload config
 */
const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: "public/uploads",
  filename: (_, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const fileFilter = (_, file, cb) => {
  const allowed = [
    "image/jpeg", "image/png", "image/webp", "image/svg+xml",
    "video/mp4", "video/webm", "video/quicktime",
    "image/gif", "application/pdf"
  ];
  cb(null, allowed.includes(file.mimetype));
};

module.exports = multer({
  storage,
  limits: { fileSize: 100 * 1024 * 1024 },
  fileFilter
});
