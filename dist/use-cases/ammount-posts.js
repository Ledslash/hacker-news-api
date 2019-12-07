"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = makeNumberOfRecords;

function makeNumberOfRecords({
  postsDb
}) {
  return async function numberOfRecords() {
    const postAmmoun = postsDb.numberOfRecords();
    return postAmmoun;
  };
}