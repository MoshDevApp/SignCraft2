"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Media", {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      name: Sequelize.STRING,
      type: Sequelize.STRING,
      size: Sequelize.INTEGER,
      folder: Sequelize.STRING,
      path: Sequelize.STRING,
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable("Media");
  }
};
