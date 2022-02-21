const fs = require("fs");

// readdtream -----------------
//
// const readStream = fs.createReadStream("./docs/large.txt");
const readStream = fs.createReadStream("./docs/large.txt", {
  encoding: "utf8",
});

// readStream.on("data", (chunk) => {
//   console.log("----------------NEW CHUNK-----------------\n");
//   console.log(chunk.toString()); //toString is used if encoading not given to read data
// });

// write stream ------------
//
const writeStream = fs.createWriteStream("./docs/writeStream.txt");

// divied data arrive in chunks
// readStream.on("data", (chunk) => {
//   console.log("----------------NEW CHUNK-----------------\n");
//   console.log(chunk); //toString is used if encoading not given to read data

//   writeStream.write("\n\n\n--------NEW CHUNK--------\n\n\n");
//   writeStream.write(chunk);
// });

// piping ----------------------
//
// from readable stream to write stream
// const myWriteStream = fs.createWriteStream("./docs/pipeStream.txt");
// readStream.pipe(myWriteStream);
