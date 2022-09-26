let array = ["item1", "item2", "item3"];
array.forEach((item) => {
  if (item === "item1") {
    return item;
  }
  console.log(item);
});
