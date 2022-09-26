//组合继承

//优点:
//1. 子类实例可以访问父类原型身上的属性和方法
//2. 子类实例之间不会共享引用属性值
//缺点:
// 1.调用了两次父类的构造函数.

function Person(name, age) {
  this.name = name || "noting";
  this.age = age || 18;
  this.share = [1, 2, 3];
  console.log("person");
}

Person.prototype.say = function () {
  console.log("say something");
};

// 子构造函数
function Son(name) {
  Person.call(this, name);
  this.sex = "man";
}

Son.prototype = new Person();

// Son.prototype.construction = Son;

const vae = new Son("vae");
const vae2 = new Son("vae2");

vae.share.push(4);

console.log(vae.share);
console.log(vae2.share);

vae.say();
