"use strict";

module.exports = (app) => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const Classify = app.model.define("classify", {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    name: STRING(50),
    tag: STRING,
    created_at: DATE,
    updated_at: DATE,
    deleted_at: DATE,
  });

  return Classify;
};
