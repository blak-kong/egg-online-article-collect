'use strict';

// app/controller/classify.js
const Controller = require('egg').Controller;

function toInt(str) {
  if (typeof str === 'number') return str;
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
    const { classify } = ctx.request.body;

    const classifyModel = await ctx.model.Classify.create({ classify });
    ctx.status = 200;
    ctx.body = classifyModel;
  }

  async update() {
    const ctx = this.ctx;
    const id = toInt(ctx.params.id);
    const classifyModel = await ctx.model.Classify.findByPk(id);
    if (!classifyModel) {
      ctx.status = 404;
      return;
    }

    const { classify } = ctx.request.body;
    await classifyModel.update({ classify });
    ctx.body = classifyModel;
  }

  async destroy() {
    const ctx = this.ctx;
    const id = toInt(ctx.params.id);
    const classifyModel = await ctx.model.Classify.findByPk(id);
    if (!classifyModel) {
      ctx.status = 404;
      return;
    }

    await classifyModel.destroy();
    ctx.status = 200;
  }
}

module.exports = ClassifyController;
