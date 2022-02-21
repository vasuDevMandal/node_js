const myfs = require("./fileSystems");

const people = require("./people");

console.log(people);

process.argv.forEach((val, index) => {
  console.log(`env variable : ${index}: ${val}`);
});
