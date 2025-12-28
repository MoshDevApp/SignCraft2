"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Screens", {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      name: Sequelize.STRING,
      location: Sequelize.STRING,
      timezone: Sequelize.STRING,
      width: Sequelize.INTEGER,
      height: Sequelize.INTEGER,
      manufacturer: Sequelize.STRING,
      os: Sequelize.STRING,
      status: Sequelize.STRING,
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable("Screens");
  }
};
