const p = new Proxy(
  {},
  {
    get(target, propKey) {
      return "拦截";
    },
  }
);

console.log(p.name);
