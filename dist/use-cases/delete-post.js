"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = makeDeletePost;

var _post = _interopRequireDefault(require("../post"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function makeDeletePost({
  postsDb
}) {
  return async function deletePost({
    id
  }) {
    if (!id) {
      throw new Error('You must supply a post id.');
    }

    const existing = await postsDb.findById({
      id: id
    });

    if (!existing) {
      throw new Error('Post not found.');
    }

    console.log(existing);
    const post = (0, _post.default)({ ...existing[0]
    });
    post.delete();
    await postsDb.deletePost({
      id: post.getId()
    });
    return {
      message: 'Post deleted.'
    };
  };
}