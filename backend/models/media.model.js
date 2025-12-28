/**
 * Media file model
 */
const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Media = sequelize.define("Media", {
  name: DataTypes.STRING,
  type: DataTypes.STRING,
  size: DataTypes.INTEGER,
  folder: DataTypes.STRING,
  path: DataTypes.STRING
});

module.exports = Media;
