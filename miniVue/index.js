class Dep {
  constructor() {
    this.subs = new Set();
  }

  addSub(sub) {
    this.subs.add(sub);
  }

  removeSub(sub) {
    this.subs.delete(sub);
  }

  notify() {
    for (const sub of this.subs) {
      sub.update();
    }
  }
}

function observe(data) {
  if (Object.prototype.toString.call(data) === "[object Object]") {
    for (let prop in data) {
      defineReactive(data, prop, data[prop]);
    }
  }
}

function defineReactive(obj, key, val) {
  const dep = new Dep();
  Reflect.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get() {
      return val;
    },
    set(newVal) {
      if (newVal == val) return;
      val = newVal;
      observe(newVal);
      dep.notify();
    },
  });
  observe(val);
}
