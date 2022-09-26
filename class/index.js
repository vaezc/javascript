function PersonType(name) {
  this.name = name;
}

PersonType.prototype.sayName = function () {
  console.log(this.name);
};

let person = new PersonType("vae");
person.sayName();

console.log(person instanceof PersonType);
console.log(person instanceof Object);

class PersonClass {
  constructor(name) {
    this.name = name;
  }

  sayName() {
    console.log(this.name);
  }
}

let person2 = new PersonClass("vae2");
person2.sayName();

console.log(person2 instanceof PersonClass);
console.log(person2 instanceof Object);

console.log(typeof PersonClass);
console.log(typeof PersonClass.prototype.sayName);
