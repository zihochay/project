// routers/blog.js

const router = require('koa-router')();
const controller = require('../controllers/blog');

// 查
router.get('/', controller.find);

// 查 动态路由
router.get('/:id', controller.detail);

// 查 今天新增 getData
router.post('/findToday', controller.findToday);

// 查 今天新增文章列表
router.post('/getData', controller.getData);

// 查 每个分类下的文章数据
router.post('/getCateBlog', controller.getCateBlog);

// 查 今天新增阅读数以及文章数量
router.post('/findAddRead', controller.findAddRead);

// addOneRead 
router.post('/addOneRead', controller.addOneRead);

// 增
router.post('/', controller.add);

// 改
router.put('/:id', controller.update);

// 删
router.del('/:id', controller.delete);

module.exports = router;
