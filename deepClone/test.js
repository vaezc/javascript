function isObject(val) {
  return val != null && typeof val === "object" && Array.isArray(val) === false;
}

function deepClone(target) {
  const map = new Map();
  function clone(target) {
    if (isObject(target)) {
      let cloneTarget = Array.isArray(target) ? [] : {};
      if (map.get(target)) {
        return map.get(target);
      }
      map.set(target, cloneTarget);
      for (const key in target) {
        cloneTarget[key] = clone(target[key]);
      }
      return cloneTarget;
    } else {
      return target;
    }
  }
  return clone(target);
}

const vae = { name: "vae" };

const test = { name: "test", relative: vae };

vae.relative = test;

const newObj = deepClone(vae);

console.log(newObj);

let b = { c: 111 };
let a = { x: 2, y: [b, b] };
console.log(deepClone(a));
