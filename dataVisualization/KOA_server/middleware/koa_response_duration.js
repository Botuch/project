//计算服务器消耗时长的中间件
module.exports = async (ctx, next) => {
    //获取起始时间
    const start = Date.now();
    //响应其他中间件
    await next();
    //获取结束时间
    const end = Date.now();
    //总响应时间
    const duration = end - start;
    //设置响应头
    ctx.set('X-Response-Time', duration + 'ms');
}