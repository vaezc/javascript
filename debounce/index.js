//防抖函数的作用是在一段时间内，如果在这段时间内重复触发事件，则只执行最后一次
function debounce(func, delay) {
  let timerId;

  return function () {
    if (timerId) {
      clearTimeout(timerId);
    }
    timerId = setTimeout(() => {
      func.call(this, ...arguments);
    }, delay);
  };
}

debounce((params) => {
  console.log(params);
}, 1000)("test");

function myDebounce(func, delay, immediate) {
  let timerId;

  //闭包捕获上次的定时器
  return function () {
    if (timerId) {
      clearTimeout(timerId);
    }

    if (immediate) {
      let callNow = !timerId;
      timerId = setTimeout(() => {
        func.call(this, ...arguments);
      }, delay);
      if (callNow) func.call(this, ...arguments);
    } else {
      timerId = setTimeout(() => {
        func.call(this, ...arguments);
      }, delay);
    }
  };
}

let obj = { test: 1 };

myDebounce((params) => {
  console.log(params);
}, 1000);
