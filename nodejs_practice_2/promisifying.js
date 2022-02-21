// import fetch from "node-fetch";
const fs = require("fs");

const fetch = require("cross-fetch");
console.log("inside promisify.js");

let path = __dirname + `\\docs\\data.json`;
console.log("path ----> " + path);
// const getFile = (path) => {
//   return new Promise((resolve, reject) => {
//     fs.readFile(path, (err, data) => {
//       if (err) {
//         reject(err);
//         return;
//       }
//       resolve(data);
//     });
//   });
// };

// getFile(path)
//   .then((data) => {
//     console.log("data fetch complete... ");
//     module.exports.data = data;
//   })
//   .catch((err) => console.log("err: " + err));

// fs.readFile(path, (err, data) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("inside readfile:  ");
//     console.log(data);
//     module.exports = { data };
//   }
// });

fetch(path)
  .then((res) => {
    if (res.ok) {
      console.log(res);
      return res.json();
    } else {
      return "error..";
    }
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
