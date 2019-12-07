"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.initializeDb = exports.numberOfRecords = exports.fetchHnPosts = exports.deletePost = exports.listPosts = void 0;

var _listPosts = _interopRequireDefault(require("./list-posts"));

var _deletePost = _interopRequireDefault(require("./delete-post"));

var _fetchHnPosts = _interopRequireDefault(require("./fetch-hn-posts"));

var _ammountPosts = _interopRequireDefault(require("./ammount-posts"));

var _initializeDb = _interopRequireDefault(require("./initialize-db"));

var _dataAccess = require("../data-access");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const listPosts = (0, _listPosts.default)({
  postsDb: _dataAccess.postsDb
});
exports.listPosts = listPosts;
const deletePost = (0, _deletePost.default)({
  postsDb: _dataAccess.postsDb
});
exports.deletePost = deletePost;
const fetchHnPosts = (0, _fetchHnPosts.default)({
  postsDb: _dataAccess.postsDb,
  hnDB: _dataAccess.hnDB
});
exports.fetchHnPosts = fetchHnPosts;
const numberOfRecords = (0, _ammountPosts.default)({
  postsDb: _dataAccess.postsDb
});
exports.numberOfRecords = numberOfRecords;
const initializeDb = (0, _initializeDb.default)({
  postsDb: _dataAccess.postsDb
});
exports.initializeDb = initializeDb;

var _default = Object.freeze({
  listPosts,
  deletePost,
  fetchHnPosts,
  numberOfRecords,
  initializeDb
});

exports.default = _default;