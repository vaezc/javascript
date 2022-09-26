let array = [1, 2, 3, 4, 5];

let result = array.reduce((sum, current) => sum + current, 0);

console.log(result);

function camelize(str) {
  let splitStr = str.split("-");
  return splitStr.join("");
}

console.log(camelize("background-color"));

function filterRange(arr, a, b) {
  return arr.filter((item) => item >= a && item < b);
}

console.log(filterRange([5, 3, 8, 1], 1, 4));
