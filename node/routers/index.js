// routers/index.js
const router = require('koa-router')();
const { apiPrefix } = require('../config/index');

const blog = require('./blog');
const category = require('./category');
const development = require('./develop');

router.prefix(apiPrefix);

router.use('/blogs', blog.routes(), blog.allowedMethods());
router.use('/categories', category.routes(), category.allowedMethods());
router.use('/development', development.routes(), development.allowedMethods());

module.exports = router;
