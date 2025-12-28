/**
 * Playlist model
 */
const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Playlist = sequelize.define("Playlist", {
  name: { type: DataTypes.STRING, allowNull: false },
  description: DataTypes.TEXT
});

module.exports = Playlist;
