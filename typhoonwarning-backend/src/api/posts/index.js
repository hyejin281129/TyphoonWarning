import Router from 'koa-router';
import * as postsCtrl from './posts.ctrl';
import checkLoggedIn from '../../lib/getPostById';

const posts = new Router();
const post = new Router(); 

posts.get('/', postsCtrl.list);
posts.post('/', checkLoggedIn, postsCtrl.write);

// /api/posts/:id
post.get('/', postsCtrl.read);
post.delete('/', checkLoggedIn, postsCtrl.checkOwnPost, postsCtrl.remove);
// posts.put('/', postsCtrl.replace);
post.patch('/', checkLoggedIn, postsCtrl.checkOwnPost, postsCtrl.update);

posts.use('/:id', postsCtrl.getPostById, post.routes());

export default posts;