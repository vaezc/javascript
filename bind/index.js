//bind 可以传入多个参数， bind返回的是一个函数，需要调用才能执行
Function.prototype.bindNew = function (context, ...args) {
  return (...newArgs) => this.apply(context, [...args, ...newArgs]);
};

// test
const test = {
  name: "fy",
  showName: function (last) {
    console.log(this.name + " is " + last);
  },
};
test.showName("handsome"); // fy is handsome
test.showName.bind({ name: "Mr.fy" })("handsome");
test.showName.bindNew({ name: "Mr.fy" })("handsome");
test.showName.bind(test, "handsome")();

// bind(thisArg)
// bind(thisArg, arg1)
// bind(thisArg, arg1, arg2)
// bind(thisArg, arg1, ... , argN)

function testBind(...arg) {
  console.log(arg);
}

testBind.bind(null, 1, 2, 3)();

// func.apply(thisArg, [argsArray])
