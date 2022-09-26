//节流的作用是在用户指定时间内触发多次动作只会执行一次。
function throttle(func, delay) {
  let timerId;
  let start = new Date();
  return function () {
    let currentTime = new Date();
    if (currentTime - start > delay) {
      func.apply(this, arguments);
    } else {
      timerId = setTimeout(() => {
        func.apply(this, arguments);
      }, delay);
    }
  };
}

function myThrottle(func, delay) {
  let context;
  let previous = 0;
  return function () {
    let now = new Date();
    context = this;
    if (now - previous > delay) {
      func.apply(context, arguments);
      previous = now;
    }
  };
}

function timerThrottle(func, delay) {
  let context = this;
  let timerId;
  return function () {
    if (!timerId) {
      timerId = setTimeout(() => {
        func.apply(context, arguments);
      }, delay);
    }
  };
}

throttle((params) => {
  console.log(params);
}, 1000)("test");
