"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = makePostsDb;

function makePostsDb({
  makeDb
}) {
  return Object.freeze({
    initPostDb,
    setPosts,
    findAll,
    findById,
    findByTitle,
    numberOfRecords,
    deletePost,
    getLastId,
    updateLastId
  });

  async function initPostDb() {
    const db = await makeDb();
    await db.defaults({
      posts: [],
      id: 0
    }).write();
  }

  async function findAll() {
    const db = await makeDb();
    return await db.get('posts').filter({
      visible: true
    }).value();
  }

  async function numberOfRecords() {
    const db = await makeDb();
    return await db.get('posts').size().value();
  }

  async function findById({
    id
  }) {
    const db = await makeDb();
    return await db.get('posts').filter({
      id: id
    }).value();
  }

  async function findByTitle({
    title
  }) {
    const db = await makeDb();
    return await db.get('posts').filter({
      title: title
    }).value();
  }

  async function deletePost({
    id
  }) {
    const db = await makeDb();
    await db.get('posts').find({
      id: id
    }).assign({
      visible: false
    }).write();
    return true;
  }

  async function getLastId() {
    const db = await makeDb();
    return await db.get('id').value();
  }

  async function updateLastId(lastId) {
    const db = await makeDb();
    return await db.update('id', n => lastId).write();
  }

  async function setPosts(posts) {
    const db = await makeDb();
    posts.forEach(async post => {
      await db.get('posts').push(post).write();
    });
    return true;
  }
}