const security = require('../libs/security');
const redisService = require('../libs/redis');
module.exports = async function (ctx, next) {
  ctx.success = function (data = {}, code = 0, msg = '') {
    ctx.body = {
      code,
      data,
      msg
    };
  };

  ctx.getSession = async function (__token) {
    let token = __token;
    let [secret, userId] = security.decipher(token).split(':');
    let session = await redisService.get(`${secret}-${userId}`);
    if (!session || session.secret !== secret) throw new Error('token check fail');
    delete session.secret;
    return session;
  };

  ctx.setSession = async function (seems, token) {
    let [secret, userId] = security.decipher(token).split(':');
    seems._doc.secret = secret;
    let ret = await redisService.set(`${secret}-${userId}`, seems);
    return ret;
  };

  ctx.delSession = async function (token) {
    let [secret, userId] = security.decipher(token).split(':');
    let ret = await redisService.del(`${secret}-${userId}`);
    return ret;
  };

  // 生成token
  ctx.createToken = function (userId) {
    let cookie = security.cipher(`${new Date().getTime()}:${userId}`);
    return cookie;
  };

  if (ctx.url === '/favicon.ico') return;

  let arr = ['/common']; // 以这些路由开头的路由不校验权限     
  let data = ctx.path.split('/').filter(item => item);
  if (data.length > 2 && !arr.includes(data[1])) {
    let token = ctx.req.headers.token || ctx.query.token;
    if (!token) {
      throw new Error('token check fail');
    }
    let user = await ctx.getSession(token);
    ctx.userId = user.userId;
  } else {
    if (ctx.req.headers.token || ctx.query.token) {
      let token = ctx.req.headers.token || ctx.query.token;
      let user = await ctx.getSession(token);
      ctx.userId = user.userId;
    }
  }
  await next();
};
