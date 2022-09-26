// 原型继承
// 如果传入的参数是一个对象的话，相当于浅复制了一个对象。类似于 Object.create()
function clone(proto) {
  function F() {}
  F.prototype = proto;
  return new F();
}

//寄生继承
// 寄生继承是在原型继承的基础上 做了增强
// 共享方法 但是还是没有解决共享引用值的问题
function cloneAndStrengthen(proto) {
  function F() {}
  F.prototype = proto;
  let f = new F();
  f.say = function () {
    console.log("say some thing");
  };
  return f;
}

//寄生组合式继承
function inherit(sub, sup) {
  let prototype = clone(sup.prototype);
  prototype.constructor = sub;
  sub.prototype = prototype;
}

function Person(name, age) {
  this.name = name || "nothing";
  this.age = age || 18;
  this.share = [1, 2, 3];
}

Person.prototype.say = function () {
  console.log("你瞅啥");
};

function Son(name) {
  // 在这里实现父类本身属性和方法的借用（借用构造函数继承）
  Person.call(this, name);

  this.sex = "man";
}

inherit(Son, Person);

const vae = new Son("vae");
const vae2 = new Son("vae2");

vae.share.push(4);

console.log(vae.share);
console.log(vae2.share);

vae.say();
console.log(vae);
