"use strict";

module.exports = (app) => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const Tag = app.model.define("tag", {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    name: STRING(50),
    classify: STRING,
    created_at: DATE,
    updated_at: DATE,
    deleted_at: DATE,
  });

  return Tag;
};
