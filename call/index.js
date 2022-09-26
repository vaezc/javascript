// call 是执行函数，与apply的区别在于 一个传递的是参数，一个传递的是参数数组，
Function.prototype.myCall = function (context, ...rest) {
  context.fn = this;
  var result = context.fn(...rest);
  delete context.fn;
  return result;
};

// test
let obj = {
  name: "jack",
};

function test(arg1, arg2, arg3) {
  console.log(this.name); // jack
  console.log(arg1, arg2, arg3); // 1 2 3
}
test.myCall(obj, 1, 2, 3);
