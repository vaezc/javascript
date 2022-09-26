// function Start(name, age) {
//   this.name = name;
//   this.age = age;
// }

// Start.sex = "男";

// let starts = new Start("vae", 20);
// console.log(starts);
// console.log(starts.sex);

// console.log(Start.name);
// console.log(Start.sex);

// function Father(name) {
//   this.name = name;
// }

// let son = new Father("vae");
// console.log(son);

// 1. 创建空对象 son
// 2. 为son 准备原型链接，将其 proto 指向构造函数的 prototype 属性
// 3. 重新绑定this， 使构造函数this指向新对象
// 4. 为新对象赋值 son.name
// 5. 返回 this ， 此时新对象就拥有了构造函数的方法和属性了

// function myNew(func, ...args) {
//   let obj = {};
//   obj.__proto__ = func.prototype;
//   let res = func.apply(obj, args);
//   return res instanceof Object ? res : obj;
// }

// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }

// console.log(myNew(Person, "vae", 15));

// console.log(Object);
// console.log(Function);
// console.log(Person);

// console.log(Person.__proto__ === Function.prototype);

// class Person {
//   constructor(name) {
//     this.name = name;
//   }

//   printName() {
//     console.log(this.name);
//   }

//   shareFunction() {
//     console.log("shareFunction");
//   }
// }

// class Student extends Person {
//   constructor(name, score) {
//     super(name);
//     this.score = score;
//   }

//   printScore() {
//     console.log(this.score);
//   }
// }

// let p = new Person("vae");
// let student = new Student("vae", 100);
// console.log(student.shareFunction());

// function foo() {}
// foo.prototype = {
//   foo_prop: "foo_prop",
// };

// function bar() {}

// var proto = new foo();

// proto.bar_prop = "bar_prop";

// bar.prototype = proto;

// var inst = new bar();
// console.log(inst.bar_prop);
// console.log(inst.foo_prop);

// function foo() {}
// foo.prototype = {
//   foo_prop: "foo_prop",
// };

// function bar() {}
// var proto = Object.create(foo.prototype);
// proto.bar_prop = "bar_prop";
// bar.prototype = proto;

// var inst = new bar();
// console.log(inst.foo_prop);
// console.log(inst.bar_prop);
// console.log(inst);

// function foo() {}
// foo.prototype = {
//   foo_prop: "foo_prop",
// };

// function bar() {}
// var proto = { bar_prop: "bar_prop" };
// Object.setPrototypeOf(proto, foo.prototype);
// bar.prototype = proto;

// var inst = new bar();
// console.log(inst.foo_prop);
// console.log(inst.bar_prop);

function foo() {}

foo.prototype = {
  foo_prop: "foo_prop",
};

function bar() {}

var proto = {
  bar_prop: "bar_prop",
  __proto__: foo.prototype,
};

bar.prototype = proto;

var inst = new bar();
console.log(inst.foo_prop);
console.log(inst.bar_prop);
