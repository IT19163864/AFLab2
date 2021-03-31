const HomeRoutes = require('./home.router.js');
const PostApi = require('../api/post.api.js');
const Router = require('@koa/router');

const router = new Router({
    prefix: '/posts'
   });
   router.get('/', ctx => {
    ctx.body = PostApi.getPosts();
   });
   router.post('/', ctx => {
    let post = ctx.request.body;
    post = PostApi.createPost(post);
    ctx.response.status = 201;
    ctx.body = post;
   });
   router.get('/:id', ctx => {
    const id = ctx.params.id;
    ctx.body = PostApi.getPost(id);
   });

module.exports = router;