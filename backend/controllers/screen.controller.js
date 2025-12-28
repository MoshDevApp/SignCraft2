const { Screen } = require("../models");

/**
 * CRUD for screens
 */
exports.create = async (req, res) => {
  const screen = await Screen.create(req.body);
  res.json(screen);
};

exports.getAll = async (_, res) => {
  res.json(await Screen.findAll());
};

exports.update = async (req, res) => {
  await Screen.update(req.body, { where: { id: req.params.id } });
  res.json({ success: true });
};

exports.remove = async (req, res) => {
  await Screen.destroy({ where: { id: req.params.id } });
  res.json({ success: true });
};
