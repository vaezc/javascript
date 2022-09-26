// function myNew(fun, ...args) {
//   let obj = {};
//   // 将构造函数的原型指向对象的原型
//   obj.__proto__ = fun.prototype;
//   //调用构造函数执行结果
//   let res = fun.apply(obj, args);
//   // 如果构造函数没有返回对象，则返回新创建的对象
//   return res instanceof Object ? res : obj;
// }

// function test(name) {
//   this.name = name;
// }

// var a = new test("a");
// console.log(a.name);

// var b = myNew(test, "b");
// console.log(b.name);

// function obj(name) {
//   let object = {};
//   object.name = name;
//   return object;
// }

// console.log(myNew(obj, "vae").name);
// console.log(new obj("vae").name);

function Person(name) {
  this.name = name;
}

let p = new Person("vae");
console.log(p.name);

function myNew(func, ...args) {
  let obj = {};
  obj.__proto__ = func.prototype;
  let result = func.apply(obj, args);
  return result instanceof Object ? result : obj;
}

let p2 = myNew(Person, "vae2");
console.log(p2.name);
console.log(Person.prototype == p2.__proto__);
console.log(Person.prototype.__proto__ == Object.prototype);
console.log(Object.prototype.__proto__);
console.log(Person.__proto__ == Function.prototype);
console.log(Person instanceof Function);
