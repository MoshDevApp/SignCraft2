const { Schedule } = require("../models");

/**
 * Assign playlists to screens
 */
exports.create = async (req, res) => {
  res.json(await Schedule.create(req.body));
};

exports.getByScreen = async (req, res) => {
  res.json(await Schedule.findAll({
    where: { ScreenId: req.params.screenId }
  }));
};
