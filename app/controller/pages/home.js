"use strict";

const Controller = require("egg").Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    await ctx.render("index.html", {
      title: "文章管理系统-首页",
    });
  }
}

module.exports = HomeController;
