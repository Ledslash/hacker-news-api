"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = makePost;

function makePost({
  id,
  title,
  link,
  author,
  created_at,
  visible = false
}) {
  return Object.freeze({
    getId: () => id,
    getTitle: () => title,
    getLink: () => link,
    getAuthor: () => author,
    getCreatedAt: () => created_at,
    isDeleted: () => visible,
    delete: () => {
      visible = false;
    }
  });
}