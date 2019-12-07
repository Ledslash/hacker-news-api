"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = makeListPosts;

function makeListPosts({
  postsDb
}) {
  return async function listPosts() {
    const posts = postsDb.findAll();
    return posts;
  };
}