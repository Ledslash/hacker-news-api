"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeDb = makeDb;
exports.hnDB = exports.postsDb = exports.default = void 0;

var _postsDb = _interopRequireDefault(require("./posts-db"));

var _hackerNewsDb = _interopRequireDefault(require("./hacker-news-db.js"));

var _lowdb = _interopRequireDefault(require("lowdb"));

var _FileSync = _interopRequireDefault(require("lowdb/adapters/FileSync"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function makeDb() {
  const adapter = new _FileSync.default('db.json');
  return (0, _lowdb.default)(adapter);
}

;
const postsDb = (0, _postsDb.default)({
  makeDb
});
exports.postsDb = postsDb;
const hnDB = (0, _hackerNewsDb.default)();
exports.hnDB = hnDB;
var _default = {
  postsDb,
  hnDB
};
exports.default = _default;