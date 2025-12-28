const { Media } = require("../models");

/**
 * Media upload handler
 */
exports.upload = async (req, res) => {
  const file = req.file;
  const media = await Media.create({
    name: file.originalname,
    type: file.mimetype,
    size: file.size,
    folder: req.body.folder || "root",
    path: `/uploads/${file.filename}`
  });
  res.json(media);
};

exports.list = async (_, res) => {
  res.json(await Media.findAll());
};
