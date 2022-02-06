'use strict';

const path = require('path');
const DATA_CONFIG = require('../dataConfig');
/* eslint valid-jsdoc: "off" */

const ENV_database =
  process.env.NODE_ENV === 'pord'
    ? 'egg_mark_pord'
    : 'egg_mark';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = (exports = {});

  // 修改端口
  config.cluster = {
    listen: {
      port: 8081,
    },
  };

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_lzw_546598185';

  // add your middleware config here
  // 配置需要的中间件，数组顺序即为中间件的加载顺序
  config.middleware = [ 'gzip' ];

  // 配置 gzip 中间件的配置
  config.gzip = {
    threshold: 1024, // 小于 1k 的响应体不压缩
  };

  config.sequelize = {
    dialect: 'mysql',
    host: DATA_CONFIG.host,
    password: DATA_CONFIG.pass,
    port: 3306,
    database: ENV_database,
  };

  config.security = {
    csrf: {
      enable: false,
    },
  };

  config.view = {
    mapping: { '.html': 'ejs' }, // 遇到html的时候，使用ejs模板引擎
  };

  config.static = {
    prefix: '/static/',
    dir: [
      path.join(appInfo.baseDir, 'static'),
      // path.join(appInfo.baseDir, 'publicData'),
    ], // 多静态文件入口
  };

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
    myAppName: 'egg_online_article',
    cluster: {
      listen: {
        port: 8001,
      },
    },
  };

  return {
    ...config,
    ...userConfig,
  };
};

