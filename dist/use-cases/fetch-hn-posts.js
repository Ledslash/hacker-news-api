"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = makeFetchHnPosts;

function makeFetchHnPosts({
  postsDb,
  hnDB
}) {
  return async function fetchHnPosts() {
    let lastID = await postsDb.getLastId();
    const posts = await hnDB.findPosts();
    const validPosts = [];

    for (let i = 0; i < posts.length; i++) {
      let post = posts[i]; // Assume that if post exists then any other afterward also exists

      const postExist = await postsDb.findByTitle({
        title: post.title
      });

      if (postExist.length > 0) {
        break;
      }

      post.id = ++lastID;
      validPosts.push(post);
    }

    await postsDb.setPosts(validPosts);
    await postsDb.updateLastId(lastID);
  };
}