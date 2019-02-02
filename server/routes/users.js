let router = require('koa-router')();
router.prefix('/user')
router.get('/', async function (ctx, next) {
  ctx.body = 'this a users response!';
})

module.exports = router
