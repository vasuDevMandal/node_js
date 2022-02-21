const fs = require("fs");

// read file
// fs.readFile("./docs/data.json", { encoding: "utf8" }, (err, data) => {
//   if (err) {
//     console.log(err);
//   } else {
//     // console.log(JSON.parse(data));
//     const users = JSON.parse(data);
//     users.map((user) => {
//       console.log(user.name);
//       console.log(user.email);
//       console.log();
//     });
//   }
// });

// write file

// fs.writeFile("./docs/blog1.txt", "my blog", () => {
//   console.log("same name file over-written");
// });

// fs.writeFile("./docs/blog2.txt", "my new blog!", () => {
//   console.log("new name file -> new file created");
// });

// making directories

// if (!fs.existsSync("./assets")) {
//   fs.mkdir("./assets", (err) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log("new folder created");
//     }
//   });
// } else {
//   console.log("./assets folder already exists...");
//   fs.rmdir("./assets", () => {
//     console.log("assets folder removed");
//   });
// }

// deleting a file

// if (fs.existsSync("./docs/deleteme.txt")) {
//   fs.unlink("./docs/deleteme.txt", (err) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log("deleteme file removed.");
//   });
// } else {
//   fs.writeFile("./docs/deleteme.txt", "please delete me", (err) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log("deleteme.txt file created.");
//     }
//   });
// }

const fsp = require("fs/promises");

(async function (path) {
  // console.log(exist);
  // .then(() => {
  //   console.log("file exist");
  // })
  // .catch((e) => {
  //   console.log("file not exist: ", e);
  // });
  try {
    await fsp.access(path, fs.constants.F_OK);
    console.log("can access");
  } catch (e) {
    console.log("file not exist");
    console.log(e);
  }

  try {
    if (fs.existsSync(path)) {
      await fsp.unlink(path);
      console.log(`successfully deleted ${path}`);
    } else {
      let fileData = "this is new file";
      fsp.writeFile(path, fileData);
      console.log("newFile created");
    }
  } catch (error) {
    console.error("there was an error:", error.message);
  }
})("./docs/newFile.txt");

// var myFile;
// (async function (path) {
//   try {
//     myFile = await fsp.open(path, "r");
//     let { bytesRead, buffer } = await myFile.read();
//     console.log(buffer.toString());
//   } catch (e) {
//     console.log("error: ----------->", e);
//   } finally {
//     myFile?.close();
//   }
// })("./docs/blog1.txt");

// access same as fileExistSync
// fs.access("./docs/newFile.txt", fs.constants.F_OK, (err) => {
//   console.log(` file: ${err ? "does not exist" : "exist"}`);
// });
