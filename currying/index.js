function add(a, b, c) {
  return a + b + c;
}

function currying(func) {
  return function curried(...arg) {
    console.log(arg);
    if (arg.length >= func.length) {
      return func.apply(this, arg);
    } else {
      return function (...args2) {
        return curried.apply(this, arg.concat(args2));
      };
    }
  };
}

// func add

// var currying = (fn) =>
//   (judge = (...args) =>
//     args.length === fn.length ? fn(...args) : (arg) => judge(...args, arg));

// fn => add

const curryingFun = currying(add);

// console.log(curryingFun(1, 2, 3));
console.log(curryingFun(1)(2)(3));
// console.log(curryingFun(1, 2)(3));
