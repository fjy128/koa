const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const debug = require('debug')('koa2:server')
const path = require('path')
const cors = require('koa2-cors');
const log4js = require('./middleware/log4.js');
const auth = require('./middleware/auth.js');
const error = require('./middleware/error.js');

const config = require('./config')
const index = require('./routes/index')
const user = require('./routes/users.js')
require('./libs/db.js')();
// error handler
onerror(app)
process.env.dataDir = __dirname;

// logger
app.use(async (ctx, next) => { 
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - $ms`)
})

// middlewares
app.use(bodyparser())
  .use(json()) 
  .use(log4js)
  .use(error)
  .use(logger())
  .use(cors())
  .use(auth) 
  .use(require('koa-static')(__dirname + '/public'))
  .use(views(path.join(__dirname, '/views'), {
    options: {settings: {views: path.join(__dirname, 'views')}},
    map: {'ejs': 'ejs'},
    extension: 'ejs'
  }))
  app.use(index.routes()).use(index.allowedMethods())
  app.use(user.routes()).use(user.allowedMethods())



app.on('error', function(err, ctx) {
  console.log(err)
  ctx.log.error(`发生错误:${err}`);
  logger.error('server error', err, ctx)
})

module.exports = app.listen(config.port, () => {
  console.log(`Listening on http://localhost:${config.port}`)
})
