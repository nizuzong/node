/**
 * node毁掉函数
 * node.js异步编程的直观体现就是毁掉
 * node的异步IO就是依托于回调来实现 且node的所有API都支持回调函数
 */

//阻塞代码
const fs = require('fs');
const data = fs.readFileSync('text.txt');

console.log(data.toString());
console.log('结束！')


//非阻塞代码

const fs = require('fs');
fs.readFile('text.txt', (err, data) => {
  if (err) {
    return console.error(err);
  }
  console.log(data.toString());
});

console.log('执行结束!');

/**
 * 由以上两个例子可以看出阻塞代码是按顺序执行的，非阻塞代码我们不需要等待文件读取完依旧可以执行下面的代码，这样很大程度的提高了程序的性能
 * 所以阻塞是按顺序执行的，非阻塞是不需要按顺序的，如果需要处理回调函数的参数，我们就写在回调函数内即可
 */