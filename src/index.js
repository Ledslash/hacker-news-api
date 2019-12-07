import app from './app'
import normalizePort from 'normalize-port'
import axios from 'axios'
import { listPosts, deletePost, fetchHnPosts, numberOfRecords, initializeDb } from './use-cases'
import mongoose from 'mongoose'
import cron from 'node-cron';

import dotenv from 'dotenv'
dotenv.config()


app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

const port = normalizePort(process.env.PORT || '8000');
app.listen(port);
console.log("Listening on port " + port);


app.get('/',async (req, res) => {
	const recordNum = await numberOfRecords();
	if (recordNum == 0) {
		await fetchHnPosts();
	}
	const posts = await listPosts();
	res.status(200).send(posts)
});

app.delete('/:postID',async (req, res) => {
	const result = await deletePost({ _id: req.params.postID });
	res.status(200).send(result);
});

// Run it every single hour
cron.schedule('* 1 * * *', async () => {
	await fetchHnPosts();
});