//bind 可以传入多个参数， bind返回的是一个函数，需要调用才能执行
Function.prototype.bindNew = function (context, ...args) {
  // 保存原始函数
  const self = this;
  
  // 处理context为null或undefined的情况，这时应该绑定到全局对象
  context = context || (typeof window !== 'undefined' ? window : global);

  // 返回一个新函数
  const bound = function (...newArgs) {
    // 关键点：当作为构造函数调用时，this应该指向新创建的对象
    // 而不是传入的context
    if (this instanceof bound) {
      // 如果是new调用，this指向新创建的对象
      return self.apply(this, [...args, ...newArgs]);
    }
    // 普通函数调用，绑定context
    return self.apply(context, [...args, ...newArgs]);
  };

  // 维护原型链
  // 这样做的目的是为了保证 new bound() 能够继承原函数的原型属性
  bound.prototype = Object.create(this.prototype);
  
  return bound;
};

// test


// 测试用例
const test = {
  name: "fy",
  showName: function (last) {
    console.log(this.name + " is " + last);
  },
};

// 测试普通调用
test.showName.bindNew({ name: "Mr.fy" })("handsome");

// 测试new调用
function Person(name, age) {
  this.name = name;
  this.age = age;
}
const BoundPerson = Person.bindNew(null, "John");
const person = new BoundPerson(25);
console.log(person.name); // "John"
console.log(person instanceof Person); // true
