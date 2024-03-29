// routers/category.js

const router = require('koa-router')();
const controller = require('../controllers/category');

// 查
router.get('/', controller.find);

// 查
router.get('/findAll', controller.findAll);

// 查 动态路由
router.get('/:id', controller.detail);

// 增
router.post('/', controller.add);

// 改
router.put('/:id', controller.update);

// 删
router.del('/:id', controller.delete);

module.exports = router;
