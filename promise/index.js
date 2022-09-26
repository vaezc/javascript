const PENDING = Symbol();
const REJECTED = Symbol();
const FULLFILLED = Symbol();

//promise 的实现关键在于返回的对象也是一个promise，promise分为几种状态，pendding，fullfilled，rejected，
// 当promise的状态发生变化时，会触发相应的回调函数，这些回调函数可以是一个或者多个，

// const MyPromise = function (fn) {
//   this.state = PENDING;
//   this.value = "";

//   const resolve = (value) => {
//     this.state = FULLFILLED;
//     this.value = value;
//   };

//   const reject = (error) => {
//     this.state = REJECTED;
//     this.value = error;
//   };

//   this.then = (onFullFill, onReject) => {
//     // console.log(this.state, this.value);
//     if (this.state == FULLFILLED) {
//       onFullFill(this.value);
//     } else {
//       onReject && onReject(this.value);
//     }
//     return this;
//   };

//   this.catch = (onReject) => {
//     if (this.state == REJECTED) {
//       onReject(this.value);
//     }
//     return this;
//   };

//   try {
//     fn(resolve, reject);
//   } catch (error) {
//     reject(error);
//   }
// };

let MyPromise = Object;

MyPromise.all = function (promises) {
  return new Promise((resolve, reject) => {
    let arr = [];
    let i = 0;
    function handleDate(index, data) {
      arr[index] = data;
      i++;
      if (i === promises.length) {
        resolve(arr);
      }
    }
    for (let i = 0; i < promises.length; i++) {
      promises[i].then((data) => {
        handleDate(i, data);
      }, reject);
    }
  }).then((data) => console.log(data));
};

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("p1");
  }, 1000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("p2");
  }, 1000);
});

// Promise.all([p1, p2]).then((data) => console.log(data));

console.log(
  MyPromise.all([p1, p2])
    .then((data) => console.log(data))
    .catch((err) => console.log(err))
);
