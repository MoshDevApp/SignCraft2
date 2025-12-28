/**
 * Digital screen model
 */
const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Screen = sequelize.define("Screen", {
  name: { type: DataTypes.STRING, allowNull: false },
  location: DataTypes.STRING,
  timezone: DataTypes.STRING,
  width: DataTypes.INTEGER,
  height: DataTypes.INTEGER,
  manufacturer: DataTypes.STRING,
  os: DataTypes.STRING,
  status: {
    type: DataTypes.ENUM("online", "offline"),
    defaultValue: "offline"
  }
});

module.exports = Screen;
