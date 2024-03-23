import koa from 'koa';
import Router from 'koa-router';
import { user } from './routes/user';

const app = new koa();

// 装载所有的子路由
const router = new Router();
router.use('/api/user', user.routes(), user.allowedMethods());

// 加载路由中间件
app.use(router.routes());
app.use(router.allowedMethods());

app.listen(4000);
console.log('listening on 4000');
