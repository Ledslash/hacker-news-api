import makePostsDb from './posts-db';
import makeHNewsDb from './hacker-news-db.js';
import low from 'lowdb'
import FileSync from 'lowdb/adapters/FileSync'
import mongoose from 'mongoose'


const url =  process.env.MONGO_HOST || 'mongodb://mongohost:27017/';
const dbName = 'posts';
export async function makeDb(){
	return await mongoose.connect(url+dbName, { useNewUrlParser: true, useUnifiedTopology: true});
};

const postsDb = makePostsDb({ makeDb })
const hnDB = makeHNewsDb()

export default { 
	postsDb,
	hnDB
}
export {
	postsDb,
	hnDB
}