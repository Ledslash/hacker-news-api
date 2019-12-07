"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = makeHNewsDb;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function makeHNewsDb() {
  return Object.freeze({
    findPosts
  });

  async function findPosts() {
    const response = await _axios.default.get("http://hn.algolia.com/api/v1/search_by_date?query=nodejs");
    const posts = [];
    response.data.hits.forEach(element => {
      if (element.story_title != null) {
        posts.push(normalizeData(element));
      }

      ;
    });
    return posts;
  }

  function normalizeData(element) {
    return {
      id: "",
      title: element.story_title,
      author: element.author,
      created_at: element.created_at,
      visible: true
    };
  }
}