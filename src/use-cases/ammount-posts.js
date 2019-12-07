export default function makeNumberOfRecords({ postsDb }) {
	return async function numberOfRecords(){
		const postAmmoun = postsDb.numberOfRecords();
		return postAmmoun;
	}
}