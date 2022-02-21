// const wait = (time) => {
//   console.log(`I'll wait ${time / 1000} seconds`);
//   setTimeout(() => {
//     console.log("wait over for: ", time / 1000, "seconds");
//   }, time);
// };

// wait(5000);
// wait(5000);

// const waitPromise = () => {
//   return new Promise((resolve, reject) => {
//     let time = 5000;
//     console.log(`I'll wait ${time / 1000} seconds`);
//     setTimeout(() => {
//       text = "wait over for: " + time / 1000 + " seconds";
//       resolve(text);
//     }, time);
//   });
// };

// waitPromise()
//   .then((text) => {
//     console.log(text);
//     waitPromise().then((data) => console.log(data));
//   })
//   .catch((err) => console.log(err));

// const waitAsync = async () => {
//   try {
//     await waitPromise(5000).then((result) => console.log(result));
//     await waitPromise(5000).then((result) => console.log(result));
//     await waitPromise(5000).then((result) => console.log(result));
//     await waitPromise(5000).then((result) => console.log(result));
//     await waitPromise(5000).then((result) => console.log(result));
//   } catch (err) {
//     console.log(err);
//   }
// };

// waitAsync();
