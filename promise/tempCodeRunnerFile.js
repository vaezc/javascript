console.log(
  MyPromise.all([p1, p2])
    .then((data) => console.log(data))
    .catch((err) => console.log(err))
);
