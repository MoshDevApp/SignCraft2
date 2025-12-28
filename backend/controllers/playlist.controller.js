const { Playlist, PlaylistItem, Media } = require("../models");

/**
 * Playlist CRUD
 */
exports.create = async (req, res) => {
  res.json(await Playlist.create(req.body));
};

exports.getAll = async (_, res) => {
  res.json(await Playlist.findAll({
    include: { model: PlaylistItem, include: Media }
  }));
};

exports.addItem = async (req, res) => {
  const item = await PlaylistItem.create(req.body);
  res.json(item);
};

exports.remove = async (req, res) => {
  await Playlist.destroy({ where: { id: req.params.id } });
  res.json({ success: true });
};
