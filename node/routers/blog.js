// routers/blog.js
const router = require('koa-router')();

router.get('/', async (ctx) => {
  /**
    在 koa2 中 GET 传值通过 request 接收，但是接收的方法有两种：query 和 querystring。
    query：返回的是格式化好的参数对象。
    querystring：返回的是请求字符串。
  */
  ctx.body = `我是文章接口id: ${ctx.query.id}`;
});

// 动态路由
router.get('/:id', async (ctx) => {
  ctx.body = `动态路由文章接口id: ${ctx.params.id}`;
});

module.exports = router;
