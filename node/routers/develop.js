// routers/category.js

const router = require('koa-router')();
const controller = require('../controllers/develop');


// 增
router.post('/addDev', controller.add);

// 查所有
router.post('/findAll', controller.findAll);

// 改
router.post('/editDev', controller.update);

module.exports = router;
