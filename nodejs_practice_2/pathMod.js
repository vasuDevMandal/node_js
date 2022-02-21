const path = require("path");

const myPath = path.resolve("./data.json");
const myPath2 = path.normalize("fa/../../data.json");
const myPath3 = path.join(myPath, myPath2, "faf/afs/fa/fl.txt");

console.log(myPath);
console.log("normalize: ", myPath2);
console.log("join: ", myPath3);
