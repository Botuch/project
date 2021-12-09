const path = require('path');
const fileUtils = require('../utils/files_utils');
//处理业务逻辑的中间件，读取某个json文件的数据
module.exports = async (ctx, next) => {
    // 获取请求的url地址
    const url = ctx.request.url;       // /api/seller
    // 对url地址进行切割与拼接
    let filePath = url.replace('/api', ''); // /seller
    filePath = '../data/json' + filePath + '.json';   // ../data/json/seller.json
    // 生成绝对路径C:\Users\陈也\Desktop\前端\项目\1-数据可视化\KOA_server\data\json\seller.json'
    filePath = path.join(__dirname, filePath);
    // 调用files_utils中的方法来获取json数据，返回的是promise对象，通过语法糖转为json对象
    try {
        const ret = await fileUtils.readJsonData(filePath);
        // 将响应主体设为获取来的json对象
        ctx.response.body = ret;
    } catch (error) {
        const errorMsg = {
            message: '读取文件失败，文件资源不存在',
            status: 404
        };
        ctx.response.body = JSON.stringify(errorMsg);
    }
    await next();
}