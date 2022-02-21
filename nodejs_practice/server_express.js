const express = require("express");

// express app
const app = express();

// listen for request
app.listen(3000, () => {
  console.log("listening to port: 3000 ");
});

// for get requests
app.get("/", (req, res) => {
  //not required express guess from the content itself. and stateCode not required as well
  // res.setHeader('Content-Type', 'text/html')

  //   res.send("home page");
  //   res.send("<p>home page</p>");
  res.sendFile("./views/index.html", { root: __dirname });
});

app.get("/about", (req, res) => {
  //   res.send("<p>about page</p>");
  res.sendFile("./views/about.html", { root: __dirname });
});

// redirects
app.get("/about-us", (req, res) => {
  res.redirect("/about");
});

// for errors or 404
// https://youtu.be/Lr9WUkeYSA8?list=PL4cUxeGkcC9jsz4LDYc6kv3ymONOKxwBU&t=1033
// use() to create middleware and fire middleware  functions in express
// use method method must be the last method in the page
// because use method fire for every request
// if usercase is matched and matched event is fired then good otherwise use() will respond
// and only first response is returned so other response is going to waste

app.use((req, res) => {
  //   res.sendFile("./views/404.html", { root: __dirname });
  // use express status method- express doesn't know if this is 404 response
  res.status(404).sendFile("./views/404.html", { root: __dirname });
});
