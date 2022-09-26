function cb(val) {
  console.log(val);
  console.log("试图更新了");
}

function observer(value) {
  if (!value || typeof value !== "object") {
    return;
  }
  Object.keys(value).forEach((key) => {
    defineReactive(value, key, value[key]);
  });
}

//订阅者 每个属性可能有多个依赖，data watch computed  都算是的
class Dep {
  constructor() {
    this.subs = [];
  }

  addSub(sub) {
    this.subs.push(sub);
  }

  notify() {
    this.subs.forEach((sub) => {
      sub.update();
    });
  }
}

//观察者
class Watcher {
  constructor() {
    Dep.target = this;
  }

  update() {
    console.log("试图更新");
  }
}

Dep.target = null;

function defineReactive(obj, key, val) {
  const dep = new Dep();

  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter() {
      dep.addSub(Dep.target);
      return val;
    },
    set: function reactiveSetter(newVal) {
      if (newVal === val) return;
      dep.notify();
    },
  });
}

class Vue {
  constructor(options) {
    this._data = options.data;
    observer(this._data);
    new Watcher();
    console.log("render", this._data.test);
    console.log(this._data.name);
  }
}

let o = new Vue({
  data: {
    test: "I am test",
    name: "vae",
  },
});

let test = new Vue({
  data: {
    name: "I am vae",
  },
});

// o._data.test = "hello world"
