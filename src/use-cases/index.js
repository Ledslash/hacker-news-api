import makeListPosts from './list-posts';
import makeDeletePost from './delete-post';
import makeFetchHnPosts from './fetch-hn-posts';
import makeNumberOfRecords from './ammount-posts';
import makeInitializeDb from './initialize-db';
import { postsDb, hnDB } from '../data-access';

const listPosts = makeListPosts({ postsDb });
const deletePost = makeDeletePost({ postsDb });
const fetchHnPosts = makeFetchHnPosts({ postsDb, hnDB });
const numberOfRecords = makeNumberOfRecords({ postsDb });
const initializeDb = makeInitializeDb({ postsDb })

export { listPosts, deletePost, fetchHnPosts, numberOfRecords, initializeDb }
export default Object.freeze({ listPosts, deletePost, fetchHnPosts, numberOfRecords, initializeDb })