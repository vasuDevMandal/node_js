const fs = require("fs");

// read files
// fs.readFile("./docs/mini.txt", (err, data) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log("raw data: ", data);
//   console.log("data.toString: ", data.toString());
// });

// write files
// fs.writeFile("./docs/mini.txt", "hello, this is new text.", (err, data) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log("file was written");
// });

// create file--if file does not exist fs.writeFile will create new file
// fs.writeFile(
//   "./docs/small.txt",
//   "hello, this is small text file.",
//   (err, data) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log("file was written");
//   }
// );

// create directories

// fs.mkdir("./assets", (err) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log("directory created");
// });

// for checking directory
// if (!fs.existsSync("./assets")) {
//   fs.mkdir("./assets", (err) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log("directory created");
//   });
// } else {
//   fs.rmdir("./assets", (err) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log("directory deleted");
//   });
// }

// deleting files

// if (fs.existsSync("./docs/small.txt")) {
//   fs.unlink("./docs/small.txt", (err) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log("file deleted");
//   });
// } else {
//   fs.writeFile("./docs/small.txt", "", () => {});
// }
