'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.pages.home.index);
  router.resources('users', '/api/users', controller.v1.users);
  router.resources('article', '/api//article', controller.v1.article);
  router.resources('classify', '/api/classify', controller.v1.classify);
  router.resources('tag', '/api/tag', controller.v1.tag);
};
