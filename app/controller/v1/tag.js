'use strict';

// app/controller/Tag.js
const Controller = require('egg').Controller;

function toInt(str) {
  if (typeof str === 'number') return str;
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
    const { tag } = ctx.request.body;

    const tagModel = await ctx.model.Tag.create({ tag });
    ctx.status = 200;
    ctx.body = tagModel;
  }

  async update() {
    const ctx = this.ctx;
    const id = toInt(ctx.params.id);
    const tagModel = await ctx.model.Tag.findByPk(id);
    if (!tagModel) {
      ctx.status = 404;
      return;
    }

    const { tag } = ctx.request.body;
    await tagModel.update({ tag });
    ctx.body = tagModel;
  }

  async destroy() {
    const ctx = this.ctx;
    const id = toInt(ctx.params.id);
    const tagModel = await ctx.model.Tag.findByPk(id);
    if (!tagModel) {
      ctx.status = 404;
      return;
    }

    await tagModel.destroy();
    ctx.status = 200;
  }
}

module.exports = TagController;
