import controller from '../controller';
import Router from 'koa-router';

export const user = new Router();

user.get('/test', controller.user.test);
