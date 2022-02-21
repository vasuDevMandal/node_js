console.log("inside httpMod.js");

const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  console.log(req.url);
  res.setHeader("Content-Type", "text/html");
  if (req.url === "/abouta") {
    let path = "./pages/about.html";
    if (fs.existsSync(path)) {
      fs.readFile(path, (err, data) => {
        if (err) {
          console.log("no file:", path);
        }
        res.write(data);
        console.log(res.hasHeader("content-type"));
        res.end();
      });
    } else {
      res.write("about page not found");
      res.end();
    }
  } else {
    res.write("<h1>response from http mod</h1>");
    res.end();
  }
});

server.listen(3000, "localhost", () => {
  console.log("listening to port: 3000");
});
