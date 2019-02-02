module.exports = async (ctx, next) => {
  try {
    if (Object.keys(ctx.query).length > 0) {
      ctx.log.info(`请求参数:${ctx.path}  ,接受到的参数:get===>${JSON.stringify(ctx.query)}`);
    }
    if (Object.keys(ctx.request.body).length > 0) {
      ctx.log.info(`请求参数:${ctx.path}  ,接受到的参数:post===>${JSON.stringify(ctx.request.body)}`);
    }
    await next();
  } catch (err) {
    ctx.status = err.status || 200;
    ctx.res.statusMessage = err.name || 'server error';
    ctx.log.error(`发生错误:${err.stack}`);
    ctx.success({}, err.code || -1, err.message);
  }
};
