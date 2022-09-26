function cloneShallow(source) {
  var target = {};
  for (const key in source) {
    if (Object.hasOwnProperty.call(source, key)) {
      target[key] = source[key];
    }
  }
  return target;
}

function isObject(obj) {
  return typeof obj === "object" && obj !== null;
}

function cloneDeep1(source) {
  var target = {};
  for (const key in source) {
    if (Object.hasOwnProperty.call(target, key)) {
      if (typeof source[key] === "object") {
        target[key] = cloneDeep1(source[key]);
      } else {
        target[key] = source[key];
      }
    }
  }
  return target;
}

function cloneDeep2(source) {
  if (!isObject(source)) return source;

  var target = Array.isArray(source) ? [] : {};
  for (const key in source) {
    if (Object.prototype.hasOwnProperty.call(source, key)) {
      if (isObject(source[key])) {
        target[key] = cloneDeep2(source[key]); // 注意这里
      } else {
        target[key] = source[key];
      }
    }
  }
  return target;
}

function cloneDeep3(source, hash = new WeakMap()) {
  if (!isObject(source)) return source;
  if (hash.has(source)) return hash.get(source);

  var target = Array.isArray(source) ? [] : {};
  hash.set(source, target);

  for (const key in source) {
    if (Object.prototype.hasOwnProperty.call(source, key)) {
      if (isObject(source[key])) {
        target[key] = cloneDeep3(source[key], hash); // 注意这里
      } else {
        target[key] = source[key];
      }
    }
  }
  console.log(hash);
  return target;
}

function cloneDeep4(source, hash = new WeakMap()) {
  if (!isObject(source)) return source;
  if (hash.has(source)) return hash.get(source);

  let target = Array.isArray(source) ? [...source] : { ...source };

  hash.set(source, target);

  Reflect.ownKeys(target).forEach((key) => {
    if (isObject(source[key])) {
      target[key] = cloneDeep4(source[key], hash);
    } else {
      target[key] = source[key];
    }
  });
  return target;
}

var a = {
  name: "vae",
  book: {
    title: "you dont know js",
    price: 34,
  },
};

var c = Symbol("a");

a.circleRef = a;
a.c = c;

var b = cloneDeep3(a);
console.log(b);
