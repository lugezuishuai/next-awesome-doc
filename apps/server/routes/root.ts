import Router from 'koa-router';
import { rootController } from '../controller/root';

export const root = new Router();

root.get('/', rootController.renderHtml);
