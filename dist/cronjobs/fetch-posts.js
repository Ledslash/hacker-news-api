"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = fetchPosts;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function fetchPosts() {
  const response = await _axios.default.get("http://hn.algolia.com/api/v1/search_by_date?query=nodejs");
  const posts = [];
  response.data.hits.forEach(element => {
    posts.push({
      id: "4",
      title: element.story_title,
      author: element.author,
      created_at: element.created_at,
      visible: true
    });
  });
  return response.data;
}