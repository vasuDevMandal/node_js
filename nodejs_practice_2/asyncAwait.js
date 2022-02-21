const doSomethingAsync = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("i did something.");
    }, 3000);
  });
};

const doSomething = async () => {
  const data = await doSomethingAsync();
  console.log(data);
};

doSomething();
// doSomethingAsync()
// .then((data) => console.log(data))
// .catch((err) => console.log("error: " + err));

// ---------------------------------------------------------

// const promiseFunction = () => {
//   return new Promise((resolve, reject) => {
//     console.log("1st promise...");
//     setTimeout(() => {
//       resolve("1st promise data: nice to meet you");
//     }, 5000);
//   });
// };

// const watch_promiseFn = async () => {
//   const firstRes = await promiseFunction();
//   console.log("2nd promise...");
//   return firstRes + ", extra: [watch_prmoiseFn data]";
// };

// const mainWatch = async () => {
//   const final = await watch_promiseFn();
//   return final;
// };
// mainWatch().then((data) => console.log(data));
