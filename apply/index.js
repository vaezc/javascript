//object 去调用function 参数是数组类型的，参数可以为空，主要是将参数和传入的对象类型建立关联关系
Function.prototype.myApply = function (context, args) {
  context.fn = this;
  var res = context.fn(...args);
  if (!args) {
    res = context.fn();
  } else {
    res = context.fn(...args);
  }
  return res;
};

// test
let obj = {
  name: "jack",
};
function test(arg1, arg2, arg3) {
  console.log(this.name); // jack
  console.log(arg1, arg2, arg3); // 1 2 3
}

test.myApply(obj, [1, 2, 3]);
test.apply(obj, [1, 2, 3]);
// test.apply(obj);
