var Person = function (name) {
  this.name = name;
};

Person.prototype.age = 26;

var person = new Person("vae");

Object.defineProperty(person, "job", {
  value: "FEDer",
  enumerable: true,
  configurable: true,
  writable: true,
});

console.log(Object.keys(person));

//Object.keys 返回自身可枚举的属性

//forin 返回自身以及原型中继承来的所有可枚举属性。
console.log(person);
for (const p in person) {
  if (Object.hasOwnProperty.call(person, p)) {
    console.log(p);
  }
}

console.log(Object.getOwnPropertyNames(person));
console.log(Object.getPrototypeOf(person));

function getAllPropertyNames(obj) {
  var props = [];
  do {
    props = props.concat(Object.getOwnPropertyNames(obj));
  } while ((obj = Object.getPrototypeOf(obj)));
  return props;
}

console.log(getAllPropertyNames(person));

console.log(Object.getPrototypeOf(Object.create(null)));

console.log(Object.entries(person));

const map = new Map([
  ["foo", "bar"],
  ["baz", 42],
]);
const obj = Object.fromEntries(map);
console.log(obj);
