// eventEmitter是一个响应式监听的对象，创建一个全局的单例，可以通过这个单例
// 派发事件， 监听事件， 取消事件。

class EventEmitter {
  constructor() {
    this.all = new Map();
  }

  on(type, handler) {
    let handlers = this.all.get(type);
    if (handlers) {
      handlers.push(handler);
    } else {
      this.all.set(type, [handler]);
    }
  }

  off(type, handler) {
    let handlers = this.all.get(type);
    if (!handlers) return;

    if (handler) {
      this.all.get(type).splice(handlers.indexOf(handler), 1);
    } else {
      this.all.set(type, []);
    }
  }

  emit(type, params) {
    const handlers = this.all.get(type);
    if (!handlers) return;

    handlers.forEach((item) => {
      item(params);
    });
  }
}

// array.forEach(element => {

// });

const eventEmitter = new EventEmitter();

eventEmitter.on("test", (e) => console.log(e));
eventEmitter.on("test", (e) => console.log("a" + e.toString()));
eventEmitter.off("test", (e) => console.log(e));
eventEmitter.emit("test", { a: "vae" });
