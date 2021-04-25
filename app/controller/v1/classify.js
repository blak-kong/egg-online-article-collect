"use strict";

// app/controller/classify.js
const Controller = require("egg").Controller;

function toInt(str) {
  if (typeof str === "number") return str;
  if (!str) return str;
  return parseInt(str, 10) || 0;
}

class ClassifyController extends Controller {
  async index() {
    const ctx = this.ctx;
    const query = {
      limit: toInt(ctx.query.limit),
      offset: toInt(ctx.query.offset),
    };
    ctx.body = await ctx.model.Classify.findAll(query);
  }

  // 默认get
  async show() {
    const ctx = this.ctx;
    ctx.body = await ctx.model.Classify.findByPk(toInt(ctx.params.id));
  }

  // 默认post
  async create() {
    const ctx = this.ctx;
    const { name, tag } = ctx.request.body;

    const classify = await ctx.model.Classify.create({ name, tag });
    ctx.status = 201;
    ctx.body = classify;
  }

  async update() {
    const ctx = this.ctx;
    const id = toInt(ctx.params.id);
    const classify = await ctx.model.Classify.findByPk(id);
    if (!classify) {
      ctx.status = 404;
      return;
    }

    const { name, tag } = ctx.request.body;
    await classify.update({ name, tag });
    ctx.body = classify;
  }

  async destroy() {
    const ctx = this.ctx;
    const id = toInt(ctx.params.id);
    const classify = await ctx.model.Classify.findByPk(id);
    if (!classify) {
      ctx.status = 404;
      return;
    }

    await classify.destroy();
    ctx.status = 200;
  }
}

module.exports = ClassifyController;
