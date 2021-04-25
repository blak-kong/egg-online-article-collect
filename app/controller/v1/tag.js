"use strict";

// app/controller/Tag.js
const Controller = require("egg").Controller;

function toInt(str) {
  if (typeof str === "number") return str;
  if (!str) return str;
  return parseInt(str, 10) || 0;
}

class TagController extends Controller {
  async index() {
    const ctx = this.ctx;
    const query = {
      limit: toInt(ctx.query.limit),
      offset: toInt(ctx.query.offset),
    };
    ctx.body = await ctx.model.Tag.findAll(query);
  }

  // 默认get
  async show() {
    const ctx = this.ctx;
    ctx.body = await ctx.model.Tag.findByPk(toInt(ctx.params.id));
  }

  // 默认post
  async create() {
    const ctx = this.ctx;
    const { name, classify } = ctx.request.body;

    const tag = await ctx.model.Tag.create({ name, classify });
    ctx.status = 201;
    ctx.body = tag;
  }

  async update() {
    const ctx = this.ctx;
    const id = toInt(ctx.params.id);
    const tag = await ctx.model.Tag.findByPk(id);
    if (!tag) {
      ctx.status = 404;
      return;
    }

    const { name, classify } = ctx.request.body;
    await tag.update({ name, classify });
    ctx.body = tag;
  }

  async destroy() {
    const ctx = this.ctx;
    const id = toInt(ctx.params.id);
    const tag = await ctx.model.Tag.findByPk(id);
    if (!tag) {
      ctx.status = 404;
      return;
    }

    await tag.destroy();
    ctx.status = 200;
  }
}

module.exports = TagController;
