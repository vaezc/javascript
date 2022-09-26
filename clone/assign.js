// assign 是不可枚举的 故必须使用 defineProperty去设置不可枚举性
// target 对象不可为null 或者 undefine 如果使用则抛出错误， 使用== 来判断是否和空值或者未定义相等

if (typeof Object.assign2 != "function") {
  Object.defineProperty(Object, "assign2", {
    value: function (target) {
      "use strict";
      if (target == null) {
        throw new TypeError("cannot convert undefined or null to object");
      }

      var to = Object(target);

      for (var index = 1; index < arguments.length; index++) {
        var nexSource = arguments[index];

        for (var nextKey in nexSource) {
          if (Object.prototype.hasOwnProperty.call(nexSource, nextKey)) {
            to[nextKey] = nexSource[nextKey];
          }
        }
      }
      return to;
    },
    writable: true,
    configurable: true,
    enumerable: false,
  });
}

var a = "abc";
var b = {
  0: "d",
};
Object.assign2(a, b);

// let a = {
//   name: "vae",
//   age: 18,
// };

// let b = {
//   name: "test",
//   book: {
//     title: "you dont know js",
//     price: "45",
//   },
// };

// let c = Object.assign2(a, b);
// console.log(c);

// let d = [1, 2, 3];
// let e = Object.assign(d, [4, 5]);
// console.log(e);
