"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = makeInitializeDb;

function makeInitializeDb({
  postsDb
}) {
  return async function initializeDb() {
    await postsDb.initPostDb();
  };
}