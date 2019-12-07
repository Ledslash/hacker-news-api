import makePost from '../post'

export default function makeDeletePost({ postsDb }) {
	return async function deletePost({ _id }){
		if (!_id){
			throw new Error('You must supply a post id.')
		}
		const existing = await postsDb.findById({ _id: _id });
		if(!existing){
			throw new Error('Post not found.')
		}
		console.log(existing);

		const post = makePost({ 
			  _id: existing._id,
			  title: existing.title,
			  author: existing.author,
			  created_at: existing.created_at,
			  visible: existing.visible,
			  link: existing.link,
		})
		post.delete();
		await postsDb.deletePost({ _id: post.getId() });
		return {
			message: 'Post deleted.'
		};
	}
}