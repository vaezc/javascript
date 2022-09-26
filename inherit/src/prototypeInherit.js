// 原型链继承

//缺点：
// 1. 如果父类身上有引用值属性的话，子类实力之间会共享这个引用属性的值
// 2. 在创建子类实例的时候，没有办法给父类函数传递参数。

//父类构造函数
function Person(name, age) {
  this.name = name || "nothing";
  this.age = age || 18;
  this.share = [1, 2, 3];
}

Person.prototype.say = function () {
  console.log("say something");
};

//子类构造函数

function Son() {
  this.sex = "man";
}

Son.prototype = new Person(); //无法传递参数

const vae = new Son();
const vae2 = new Son();

vae.share.push(4);
console.log(vae2.share); //bad 会共享引用属性值
