//promise 有三个缺点
// 一旦新建就会立即执行 无法中途取消
new Promise((resolve, reject) => {
  resolve(1);
}).then((res) => {
  console.log(res);
});

// 如果不设置回调函数 promise 内部抛出错误 不会反应到外部

try {
  new Promise((resolve, reject) => {
    // reject(new Error("test"));
  }).then((res) => {
    console.log(res);
  });
  // .catch((err) => {
  //   console.log(err);
  // });
} catch (error) {
  console.log(error);
}

// 当处于pending 状态时，无法得知当前进展的阶段

function delay(ms) {
  return new Promise((resolve, reject) =>
    setTimeout(() => {
      resolve();
    }, ms)
  );
}

// delay(3000).then(() => console.log("run after 3 seconds"));

// new Promise((resolve, reject) => {
//   reject(new Error("Whoops!"));
// }).catch(console.log);

// new Promise((resolve, reject) => {
//   throw new Error("whoops!");
// })
//   .catch((error) => {
//     console.log(error);
//   })
//   .then(() => console.log("next successful handler runs"));

// new Promise((resolve, reject) => {
//   throw new Error("whoops!");
// })
//   .catch((error) => {
//     if (error instanceof URIError) {
//     } else {
//       console.log("cant handle such error");
//       throw error;
//     }
//   })
//   .then(() => {})
//   .catch((error) => {
//     console.log(`the unknown error ${error}`);
//   });
