import * as Koa from 'koa';
import * as Router from 'koa-router';

const app = new Koa();
const router = new Router();

router.get('/', async (ctx) => {
  ctx.status = 200;
  ctx.body = 'Hello Koa';
});

app.use(router.routes());

app.listen(process.env.APP_PORT);
