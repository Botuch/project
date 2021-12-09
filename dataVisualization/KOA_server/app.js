//koa实例化
const koa = require('koa');
const app = new koa();
//中间件
const koaDurationMiddleWare = require('./middleware/koa_response_duration');
app.use(koaDurationMiddleWare);
const koaHeaderMiddleWare = require('./middleware/koa.response_header');
app.use(koaHeaderMiddleWare);
const koaDataMiddleWare = require('./middleware/koa_response_data');
app.use(koaDataMiddleWare);
//监听端口
app.listen(3000);