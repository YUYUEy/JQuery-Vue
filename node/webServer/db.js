// db.js

const mysql = require('mysql');
const bluebird = require('bluebird');

// 创建连接
const connection = mysql.createConnection({
    host: '10.6.8.113',      // host
    port: 3306,             // 端口号默认3306
    database: 'isales',   // 对应的数据库
    user: 'apps',
    password: 's6nu0zGDq'
});

connection.connect();  // 连接数据库

// bluebird是为了方便支持promise语法化
// 然后直接把数据库的query查询语句导出方便之后调用
module.exports = bluebird.promisify(connection.query).bind(connection);
