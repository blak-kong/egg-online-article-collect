"use strict";

// app/controller/users.js
const Controller = require("egg").Controller;

function toInt(str) {
  if (typeof str === "number") return str;
  if (!str) return str;
  return parseInt(str, 10) || 0;
}

class UserController extends Controller {
  async index() {
    const ctx = this.ctx;
    const query = {
      limit: toInt(ctx.query.limit),
      offset: toInt(ctx.query.offset),
    };
    ctx.body = await ctx.model.User.findAll(query);
  }

  // 默认get
  async show() {
    const ctx = this.ctx;
    ctx.body = await ctx.model.User.findByPk(toInt(ctx.params.id));
  }

  // 默认post
  async create() {
    const ctx = this.ctx;
    const { name, age, email, level } = ctx.request.body;

    const user = await ctx.model.User.create({ name, age, email, level });
    ctx.status = 201;
    ctx.body = user;
  }

  async update() {
    const ctx = this.ctx;
    const id = toInt(ctx.params.id);
    const user = await ctx.model.User.findByPk(id);
    if (!user) {
      ctx.status = 404;
      return;
    }

    const { name, age, email, level } = ctx.request.body;
    await user.update({ name, age, email, level });
    ctx.body = user;
  }

  async destroy() {
    const ctx = this.ctx;
    const id = toInt(ctx.params.id);
    const user = await ctx.model.User.findByPk(id);
    if (!user) {
      ctx.status = 404;
      return;
    }

    await user.destroy();
    ctx.status = 200;
  }
}

module.exports = UserController;
