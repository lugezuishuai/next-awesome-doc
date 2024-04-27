import Router from 'koa-router';
import { userController } from '../controller/user';

export const user = new Router();

user.get('/test', userController.test);
