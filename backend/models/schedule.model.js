/**
 * Playlist scheduling to screens
 */
const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Schedule = sequelize.define("Schedule", {
  startDate: DataTypes.DATE,
  endDate: DataTypes.DATE,
  daysOfWeek: DataTypes.STRING, // e.g. "Mon,Tue,Wed"
  startTime: DataTypes.STRING,  // "09:00"
  endTime: DataTypes.STRING,    // "22:00"
  isDefault: { type: DataTypes.BOOLEAN, defaultValue: false }
});

module.exports = Schedule;
