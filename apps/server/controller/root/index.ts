import { Context } from 'koa';
import { Readable } from 'stream';

// 创建自定义Stream
class MyStream extends Readable {
  _read() {
    // do something
  }
}

class RootController {
  public async renderHtml(ctx: Context) {
    ctx.set('Transfer-Encoding', 'chunked');
    ctx.set('Content-Type', 'text/html');

    // 使用自定义Stream
    const stream = new MyStream();

    // 轮询发送html内容
    const timer = setInterval(() => {
      stream.push('<p>some data...</p>');
    }, 1000);

    ctx.res.once('close', () => {
      clearInterval(timer); // 清除计时器
      stream.push(null); // 结束可读流
    });

    ctx.body = stream;
  }
}

export const rootController = new RootController();
