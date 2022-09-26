let a = {
  name: "vae",
  book: {
    title: "you dont know js",
    price: "$10",
  },
};

// let b = Object.assign({}, a);
// console.log(b);

// a.name = "joe";
// a.book.title = "js";
// console.log(b);

// assign  是浅拷贝
// spread 语法也是浅拷贝
// 数组的很多方法也是浅拷贝 如slice concat

let c = JSON.parse(JSON.stringify(a));

a.book.title = "js";
console.log(a);
console.log(c);

// 使用json Stringify 和 parse 来深拷贝 会存在一些问题
// 不能处理 undefined symbol 和 function 不能处理循环引用 Date RegExp 等问题

let obj = {
  name: "vae",
  a: undefined,
  b: Symbol("symbol"),
  c: function () {},
  d: null,
  e: new Date(),
  f: /^\d+$/,
};

// undefined symbol function 会直接忽略
//日期转换格式会不正确
//正则会转换成对象

console.log(obj);
console.log(JSON.parse(JSON.stringify(obj)));
//{ name: 'vae', d: null, e: '2021-12-06T08:32:07.010Z', f: {} }

function test(a) {
  console.log("begin");
  console.log(...arguments);
  console.log(a);
}

test(1, 2, 3);
