const p1 = Promise.resolve([12]);
let p2 = new Promise((resolve, reject) => {
  setTimeout(function () {
    resolve('Promise 2');
  }, 100);
});
let p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('promise 3');
  }, 1000);
});

Promise.myallSeteled = function (promiseArr) {
  if (!Array.isArray(promiseArr)) {
    throw new Error('it is not Promise function');
  }
  let res = [];
  let count = 0;
  return new Promise((resolved, reject) => {
    promiseArr.forEach((promise, index) => {
      promise
        .then((resol) => {
          count++;
          res[index] = resol;
        })
        .catch((error) => {
          res[index] = error;
          count++;
        })
        .finally(() => {
          console.log(index);
          if (count === promiseArr.length) {
            resolved(res);
          }
        });
    });
  });
};
Promise.myallSeteled([p1, p2, p3]).then(console.log).catch(console.log);
Promise.myallSeteled([p1, p2, p3])
  .then((succ) => console.log(succ))
  .catch((err) => console.log(err));
