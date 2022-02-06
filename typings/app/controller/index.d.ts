// This file is created by egg-ts-helper@1.29.1
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportHome = require('../../../app/controller/home');
import ExportPagesHome = require('../../../app/controller/pages/home');
import ExportV1Article = require('../../../app/controller/v1/article');
import ExportV1Classify = require('../../../app/controller/v1/classify');
import ExportV1Tag = require('../../../app/controller/v1/tag');
import ExportV1Users = require('../../../app/controller/v1/users');

declare module 'egg' {
  interface IController {
    home: ExportHome;
    pages: {
      home: ExportPagesHome;
    }
    v1: {
      article: ExportV1Article;
      classify: ExportV1Classify;
      tag: ExportV1Tag;
      users: ExportV1Users;
    }
  }
}
