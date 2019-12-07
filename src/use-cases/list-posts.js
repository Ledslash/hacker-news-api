export default function makeListPosts({ postsDb }) {
	return async function listPosts(){
		const posts = postsDb.findAll();
		return posts;
	}
}