const deepClone = (obj) => {
  const map = new Map();
  map.set(obj, true);

  const copy = (obj) => {
    if (!obj || typeof obj !== "object") {
      return {};
    }

    const newObj = Array.isArray(obj) ? [] : {};

    for (const key in obj) {
      const value = obj[key];

      if (typeof value !== "object") {
        newObj[key] = value;
      } else {
        if (map.has(value)) {
          newObj[key] = null;
        } else {
          map.set(value, true);
          newObj[key] = copy(value);
        }
      }
    }

    return newObj;
  };

  return copy(obj);
};

const vae = { name: "vae" };

const test = { name: "test", relative: vae };

vae.relative = test;

const newObj = deepClone(vae);

console.log(newObj);

let b = { c: 111 };
let a = { x: 2, y: [b, b] };
console.log(deepClone(a));

function myDeepClone(obj) {}
