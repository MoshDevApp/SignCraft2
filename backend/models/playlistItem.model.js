/**
 * Playlist items = media + order + duration
 */
const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const PlaylistItem = sequelize.define("PlaylistItem", {
  duration: { type: DataTypes.INTEGER, defaultValue: 10 }, // seconds
  order: DataTypes.INTEGER,
  transitionGap: { type: DataTypes.INTEGER, defaultValue: 0 }
});

module.exports = PlaylistItem;
