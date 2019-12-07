export default function makePost ({ _id, title, link, author, created_at, visible = false }) {
	return Object.freeze({
		getId: () => _id,
		getTitle: () => title,
		getLink: () => link,
		getAuthor: () => author,
		getCreatedAt: () => created_at,
		isDeleted: () => visible,
		delete: () => {
			visible = false;
		}
	})
}