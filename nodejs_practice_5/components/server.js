const express = require("express");
const morgan = require("morgan");

const app = express();
const port = 3000;

app.set("view-engine", "ejs");
app.set('views','myviews')

app.use(morgan("dev"));//console's request method etc

app.get("/", (req, res) => {
  res.send("hello bro.");
});

app.listen(port, () => {
  console.log("listening to port", port);
});
