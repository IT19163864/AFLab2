const uuid = require('uuid');

let posts = new Map();

const createPost = obj => {
    const post = {
        id: uuid.v4(),
        postedDate: new Date(),
        name: obj.name,
        description: obj.description
    }
    posts.set(post.id, post);
}

function getPosts() {
    return [...posts.values()];
}

function getPost(id) {
    return posts.get(id);
}

module.exports = {createPost,getPosts,getPost};