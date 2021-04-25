"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    const { STRING, INTEGER, DATE, TEXT } = Sequelize;

    await queryInterface.createTable("articles", {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      name: STRING(50),
      url: TEXT,
      tag: STRING,
      classify: STRING,
      describe: STRING(500),
      created_at: DATE,
      updated_at: DATE,
      deleted_at: DATE,
    });
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('article');
     */
    await queryInterface.dropTable("articles");
  },
};
