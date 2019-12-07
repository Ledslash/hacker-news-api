export default function makeInitializeDb({ postsDb }) {
	return async function initializeDb(){
		return 1;
		//await postsDb.initPostDb();
	}
}