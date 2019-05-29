/**
 * 创建node服务器
 */
const http = require('http');

http.createServer((request, response) => {
  // createServer是http模块提供的函数  这个函数返回的是一个对象 这个对象有一个叫做listen的方法，方法中有一个参数  这个参数就是http服务器监听的端口号
  //发送http请求头部
  //http状态值 200 OK
  //内容类型 text/pain
  response.writeHead(200, {'Content-Type': 'text/pain'});

  //发送相应数据'hello Word'
  //备注 end是node中的结束
  response.end('hello word\n');
}).listen(9999);

//终端打印信息
console.log('server的服务端口http://192.168.1.127:9999');