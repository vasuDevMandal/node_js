const http = require("http");

let port = 3000;

const server = http.createServer((req, res) => {
  if (req) {
    console.log(req.url);
  }
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.end("<h1>respone is successful</h1>");
});

server.listen(port, () => {
  console.log("listening to port: ", port);
});

// const https = require("https");
// const options = {
//   hostname: "localhost",
//   port: 3000,
//   path: "/hello",
//   method: "GET",
// };

// const req = https.request(options, (res) => {
//   console.log("status code : ", res.statusCode);

//   res.on("data", (d) => {
//     process.stdout.write(d);
//   });
// });

// req.on("error", (error) => {
//   console.log(error);
// });

// req.end();
