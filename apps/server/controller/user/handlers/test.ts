import { Context } from 'koa';

export async function test(ctx: Context) {
  // 从ctx中读取get传值
  console.log(ctx.query);
  console.log(ctx.querystring);
  console.log(ctx.url);
  console.log(ctx.path);

  // 设置cookie
  ctx.cookies.set('foo', 'bar', { httpOnly: true, path: '/user' });

  ctx.type = 'application/json; charset=utf-8';
  ctx.body = { data: '你好' };
}
