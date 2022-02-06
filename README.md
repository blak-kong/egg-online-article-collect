《网络文章收藏系统》

痛点：日常在网上浏览技术文章时，偶尔会用浏览器收藏，偶尔会使用技术平台、博客平台的帐号收藏。但实际要看的时候，却常常难以找到。

于是产生了开发个人文章收藏库的想法。

同时，这也是用于快速上手 eggjs 的简单练手项目。

当前进度：

基础 api [√]

前端 [×]

谷歌插件快速调用 [x]

## 未上传的文件

根目录新建 `dataConfig.js` 是数据库的配置文件，此处填写自己的 mysql 地址和密码

```javascript
const host = "";
const pass = "";

module.exports = { host, pass };
```

`database/config.json`：可填写服务器的详细配置

```javascript
{
  "development": {
    "username": "root",
    "password": null,
    "database": "egg_online_article_dev",
    "host": "",
    "dialect": "mysql",
    "freezeTableName": true,
    "timestamps": true,
    "paranoid": true
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "egg_online_article_test",
    "host": "",
    "dialect": "mysql",
    "freezeTableName": true,
    "timestamps": true,
    "paranoid": true
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "egg_online_article",
    "host": "",
    "dialect": "mysql",
    "freezeTableName": true,
    "timestamps": true,
    "paranoid": true
  }
}
```

## QuickStart

<!-- add docs here for user -->

see [egg docs][egg] for more detail.

### Development

```bash
$ npm i
$ npm run dev
$ open http://127.0.0.1:8001/
```

### Deploy

```bash
$ npm start
$ npm stop
```

### npm scripts

- Use `npm run lint` to check code style.
- Use `npm test` to run unit test.
- Use `npm run autod` to auto detect dependencies upgrade, see [autod](https://www.npmjs.com/package/autod) for more detail.

[egg]: https://eggjs.org
