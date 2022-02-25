const { createGzip } = require("zlib");
const { pipeline } = require("stream");
const { createReadStream, createWriteStream } = require("fs");

// const gzip = createGzip();

// const source = createReadStream("./docs/car.txt");

// const destination = createWriteStream("./docs/car.txt.gz");

// pipeline(source, gzip, destination, (err) => {
//   if (err) {
//     console.log("an error occured", err);
//     process.exitCode = 1;
//   }
// });

// -----------------------------------
// in promise
// -----------------------------------

const { promisify } = require("util");

const pipe = promisify(pipeline);

async function async_gzip(input, output) {
  const gzip = createGzip();
  const source = createReadStream(input); //'./docs/car.txt'
  const dest = createWriteStream(output); //'./docs/car2.txt.gz'

  await pipe(source, gzip, dest);
}

async_gzip("./docs/car.txt", "./docs/car2.txt.gz").catch((err) => {
  console.log("erroe: ", err);
  process.exitcode = 1;
});
