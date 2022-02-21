const fetch = require("node-fetch");
// install this version "node-fetch": "^2.6.6"
let path = "https://jsonplaceholder.typicode.com/users";

// const getFirstUsertData = (path) => {
//   return fetch(path) //get the user list
//     .then((response) => response.json()) //parse json
//     .then((users) => users[0]) //pick first user
//     .then((user) => console.log(user.name));
// };

const getFirstUsertData = async (path) => {
  const response = await fetch(path);
  const users = await response.json();
  const user = users[4];
  return new Promise((resolve) => {
    resolve(user.name);
  });
};

getFirstUsertData(path).then((name) => console.log(name));
