// var Counter = (function () {
//   var privateCounter = 0;

//   function changeBy(val) {
//     privateCounter += val;
//   }

//   return {
//     increment: function () {
//       changeBy(1);
//     },
//     decrement: function () {
//       changeBy(-1);
//     },
//     value: function () {
//       return privateCounter;
//     },
//   };
// })();

// // console.log(Counter.value())
// // Counter.increment()
// // Counter.increment()
// // console.log(Counter.value())

// // 作用域分为两种 全局作用域和函数作用域

// //变量提升，未声明变量直接赋值会将该变量提升到全局范围。

// function test() {
//   a = 1;
//   {
//     let b = 2;
//   }
//   console.log(b);
// }
// test();

// console.log(a);

function makeAdd(num) {
  return function (second) {
    return num + second;
  };
}

const addTwo = makeAdd(10);
console.log(addTwo(30));

class Person {}
class Employee extends Person {}
class Developer extends Employee {}
const tom = new Developer();

console.log(tom.__proto__ === Developer.prototype);
console.log(tom.__proto__ === Employee.prototype);
console.log(Developer.isPrototypeOf(tom));
console.log(Developer.prototype.isPrototypeOf(tom));
console.log(Employee.prototype.isPrototypeOf(tom));
console.log(Person.prototype.isPrototypeOf(tom));
console.log(Object.prototype.isPrototypeOf(tom));
console.log(Developer.__proto__ === Employee);
