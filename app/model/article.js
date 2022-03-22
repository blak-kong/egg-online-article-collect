'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE, TEXT } = app.Sequelize;

  const Article = app.model.define('article', {
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

  return Article;
};
