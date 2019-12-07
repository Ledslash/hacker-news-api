import axios from 'axios'

export default function makeHNewsDb () {
    return Object.freeze({
        findPosts,
    })
    async function findPosts () {
        const response = await axios.get("http://hn.algolia.com/api/v1/search_by_date?query=nodejs");
        const posts = [];
        response.data.hits.forEach(element => {
            if (element.story_title != null && element.story_url != null) {
                posts.push(normalizeData(element))
            };
        });
        console.log(posts);
        return posts;
    }
    function normalizeData(element){
        return {
            title: element.story_title,
            author: element.author,
            created_at: element.created_at,
            link: element.story_url,
            visible: true,
        }
    }
}