const fs = require("fs");

// fs.readFile("docs/data.json", (err, data) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(data);
//     const obj = JSON.parse(data);
//     // console.log(obj);

//     obj.map((user) => {
//       console.log(user.name);
//     });
//   }
// });

//  same function in promise

function readFilePromise(filename) {
  return new Promise((resolve, reject) => {
    fs.readFile(filename, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}

readFilePromise("./docs/data.json")
  .then((usersBuffer) => {
    const usersObj = JSON.parse(usersBuffer);
    usersObj.map((user) => {
      console.log("name: ", user.name, " | email: ", user.email);
    });
  })
  .catch((err) => console.log(err));
