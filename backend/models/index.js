const sequelize = require("../config/database");

const User = require("./user.model");
const Screen = require("./screen.model");
const Media = require("./media.model");
const Playlist = require("./playlist.model");
const PlaylistItem = require("./playlistItem.model");
const Schedule = require("./schedule.model");

/**
 * Associations
 */
Playlist.hasMany(PlaylistItem, { onDelete: "CASCADE" });
PlaylistItem.belongsTo(Playlist);

Media.hasMany(PlaylistItem);
PlaylistItem.belongsTo(Media);

Screen.hasMany(Schedule);
Schedule.belongsTo(Screen);

Playlist.hasMany(Schedule);
Schedule.belongsTo(Playlist);

module.exports = {
  sequelize,
  User,
  Screen,
  Media,
  Playlist,
  PlaylistItem,
  Schedule
};
