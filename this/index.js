//this指向情况一共分为5种
//1.全局调用，如果在浏览器环境下指向window，如果在node环境下指向global
function globalCall() {
  console.log(this);
}

globalCall();

//2.作为对象的方法调用
let object = {
  a: 1,
  functionCall: function () {
    console.log(this.a);
  },
};

object.functionCall();

//3. 使用 call apply bind 等方式指定调用对象
let callObject = {
  a: 2,
};

function callFunction() {
  console.log(this.a);
}

callFunction.call(callObject);
callFunction.apply(callObject);
callFunction.bind(callObject)();

//4. 构造函数中的this始终指向它所创建的对象
function NewFunction(name) {
  this.name = name;
}

let obj = new NewFunction("vae");
console.log(obj.name);

//5. 箭头函数没有this值，它指向的是函数所处的作用域，和普通变量一样通过在作用域链中去寻找

this.test = "vae2";

let objectAF = {
  test: "inner",
};

let arrowFunction = () => {
  console.log(this);
};

arrowFunction.call(objectAF);
