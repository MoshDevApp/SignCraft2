"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("PlaylistItems", {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      duration: Sequelize.INTEGER,
      order: Sequelize.INTEGER,
      transitionGap: Sequelize.INTEGER,
      PlaylistId: Sequelize.INTEGER,
      MediaId: Sequelize.INTEGER,
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable("PlaylistItems");
  }
};
