const fetch = require("node-fetch"); //"node-fetch": "^2.6.6"

let path = "https://jsonplaceholder.typicode.com/users";

fetch(path)
  .then((respose) => respose.json())
  .then((users) => console.log(users));
