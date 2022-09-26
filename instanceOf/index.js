// instanceOf 的实现关键就是对象需要遍历原型链，找到对应的原型
// function myInstanceOf(left, right) {
//   let prototype = right.prototype;
//   left = left.__proto__;
//   while (true) {
//     if (!left) return false;
//     if (left == prototype) return true;
//     left = left.__proto__;
//   }
// }

// function vaeInstanceOf(left, right) {
//   let prototype = right.prototype;
//   let proto = left.__proto__;
//   while (true) {
//     if (!proto) return false;
//     if (proto == prototype) return true;
//     proto = proto.__proto__;
//   }
// }

// console.log(myInstanceOf([], Array)); // true
// console.log(vaeInstanceOf([], Array)); // true

// let test = {};
// console.log(test instanceof Object); // true

//遍历链表 关键点在于 实例.__proto__ === 函数.prototype

function myInstanceOf(left, right) {
  while (left) {
    if (left.__proto__ == right.prototype) {
      return true;
    }
    left = left.__proto__;
  }
  return false;
}

let obj = {};
console.log(obj instanceof Object);
console.log(myInstanceOf(obj, Object));
