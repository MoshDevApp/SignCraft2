"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Schedules", {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      startDate: Sequelize.DATE,
      endDate: Sequelize.DATE,
      daysOfWeek: Sequelize.STRING,
      startTime: Sequelize.STRING,
      endTime: Sequelize.STRING,
      isDefault: Sequelize.BOOLEAN,
      ScreenId: Sequelize.INTEGER,
      PlaylistId: Sequelize.INTEGER,
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable("Schedules");
  }
};
