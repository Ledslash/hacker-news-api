import axios from 'axios'

export default async function fetchPosts () {
    const response = await axios.get("http://hn.algolia.com/api/v1/search_by_date?query=nodejs");
    const posts = [];
    response.data.hits.forEach(element => {
        posts.push({
            id: "4",
            title: element.story_title,
            author: element.author,
            created_at: element.created_at,
            visible: true,
        })
    });
    return response.data;
}