// 闭包的定义，闭包是当前函数内对外部状态（词法作用域）的捆绑称为闭包。

// 作用：
//闭包模拟私有方法
var Counter = (function () {
  var privateCounter = 0;

  function changeBy(val) {
    privateCounter += val;
  }

  return {
    increment: function () {
      changeBy(1);
    },
    decrement: function () {
      changeBy(-1);
    },
    value: function () {
      return privateCounter;
    },
  };
})();

// 创建块级作用域

// 缺点： 内存泄漏，手动销毁置为空。

// console.log(Counter.value())
// Counter.increment()
// Counter.increment()
// console.log(Counter.value())

function makeAdd(num) {
  return function (second) {
    return num + second;
  };
}

const addTwo = makeAdd(10);
// console.log(addTwo(30));
