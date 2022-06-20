function resolvePromises(promises) {
  let data = [];
  console.log(promises);
  promises.forEach((p) => {
    console.log(p);
  });
}

function promiseOne() {
  return function () {
    setTimeout(() => {
      return "data!";
    }, 1000);
  };
}

console.log(resolvePromises([promiseOne]));
