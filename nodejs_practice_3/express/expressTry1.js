const express = require("express");

const app = express();
const port = 3000;

app.set("view engine", "ejs");

// if you have view folder then no need to add
// set look for views into ejsViews
app.set("views", "ejsViews");

app.use(logger);

app.get("/", (req, res) => {
  // res.send("Hello World");
  console.log(req.url, req.method);
  res.sendFile("./public/index.html", { root: __dirname });
});

app.get("/about", (req, res) => {
  res.send("about page");
});
app.get("/admin", auth, (req, res) => {
  console.log("user is admin = ", req.admin);
  res.send("admin panel");
});

// views ----> green.ejs no need to write .ejs its inferred
//
app.get("/green", (req, res) => {
  res.render("green", {
    title: "green page",
    fruits: ["mango", "grapes", "apple", "berries"],
  });
});
app.get("/about-us", (req, res) => {
  // res.redirect("any.html");
  res.redirect("/about");
});

// app.use() are middleware-- place middleware accordingly
// at top they execute on every request and response
// placing logging middelware at the top is good option

// serving static files
// make public folder accessible using absolute path
// localhost:3000/index.html ----> [any.html,audi.jpg]
// app.use(express.static("public"));

function logger(req, res, next) {
  console.log("log: " + Date.now(), " url: ", req.url);
  next();

  console.log("something inside logger after next()");
}
// auth middleware
function auth(req, res, next) {
  if (req.query.admin === "true") {
    // visit http://localhost:3000/about?admin=true
    req.admin = true;
    next();
    console.log("something inside 'AUTH' after next()");
  } else {
    res.send("not authorized.");
  }
  // console.log("auth");
  // next();
}

// 404 page
app.use((req, res) => {
  res.status(404).sendFile("./public/404.html", { root: __dirname });
});

app.listen(port, () => {
  console.log("listening to port: ", port);
});
