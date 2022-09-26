//借用构造函数继承 (经典继承)

// 优点: 1. 子类实例 之间不会共享引用属性
// 2. 创建子类实例的时候可传递参数
// 缺点：1.无法访问父类原型对象身上的属性和方法
function Person(name, age) {
  this.name = name || "noting";
  this.age = age || 18;
  this.share = [1, 2, 3];
}

Person.prototype.say = function () {
  console.log("say something");
};

// 子构造函数
function Son(name) {
  Person.call(this, name);

  this.sex = "man";
}

//构建子类的实例对象
const vae = new Son("vae");
const vae2 = new Son("vae2");

vae.share.push(4);

console.log(vae.share);
console.log(vae2.share);

vae.say();
