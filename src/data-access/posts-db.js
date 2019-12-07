export default function makePostsDb ({ makeDb }) {
    let model = null;
    return Object.freeze({
        setPosts,
        findAll,
        findById,
        findByTitle,
        numberOfRecords,
        deletePost,
    })

    async function makeModel(){
        if (!model) {
            const db = await makeDb();
            const posts = new db.Schema({
                title: String,
                author: String,
                created_at: Date,
                link: String,
                visible: Boolean,
            });
            model = await db.model('posts', posts);
        }
        return model;
    };

    async function findAll(){
        const postModel = await makeModel();
        return await postModel.find({visible: true});
    }

    async function numberOfRecords(){
        const postModel = await makeModel()
        return await postModel.estimatedDocumentCount();
    }

    async function findById ({ _id }) {
        const postModel = await makeModel();
        return await postModel.findById( _id );
    }
    async function findByTitle ({ title }){
        const postModel = await makeModel()
        return await postModel.find({title: title});
    }

    async function deletePost({ _id }){
        const postModel = await makeModel()
        await postModel.findOneAndUpdate({ _id: _id}, {$set:{visible:false}});
        return true;
    }
    async function setPosts(posts){
        const postModel = await makeModel();
        await postModel.create(posts)
        return true;
    }
}