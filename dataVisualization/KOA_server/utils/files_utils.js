const fs = require('fs');
//读取文件的工具方法
module.exports.readJsonData = (filePath) => {
    // 返回的是promise对象
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, 'utf-8', (error, data) => {
            if (error) {
                //读取失败  
                reject(error)         
            } else {
                // 读取成功
                resolve(data);
            }
        })
    })
}