import Router from 'koa-router';
import * as postsCtrl from './posts.ctrl';

const posts = new Router();
const post = new Router(); 

posts.get('/', postsCtrl.list);
posts.post('/', postsCtrl.write);

// /api/posts/:id
post.get('/', postsCtrl.read);
post.delete('/', postsCtrl.remove);
// posts.put('/', postsCtrl.replace);
post.patch('/',  postsCtrl.update);

posts.use('/:id', postsCtrl.checkObjectId, post.routes());

export default posts;