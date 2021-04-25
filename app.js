// {app_root}/app.js

module.exports = (app) => {
  app.beforeStart(async () => {
    // 仅开发时开启同步，避免出现生产事故
    await app.model.sync({ force: true });
  });
};
