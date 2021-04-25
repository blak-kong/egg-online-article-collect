"use strict";

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = (app) => {
  const { router, controller } = app;
  router.get("/", controller.pages.home.index);
  router.resources("users", "/users", controller.v1.users);
  router.resources("article", "/article", controller.v1.article);
  router.resources("classify", "/classify", controller.v1.classify);
  router.resources("users", "/tag", controller.v1.tag);
};
