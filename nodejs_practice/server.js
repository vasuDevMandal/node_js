const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  console.log("request made, from url: ", req.url); //evrytime url opened -->log to our console
  //   console.log("method: ", req.method, "\n url: ", req.url);

  //  1.  writing the response
  //   -set header Content-Type
  //   res.setHeader("Contnet-Type", "text/html");
  //   res.write("<p>welcome to our website</p>");
  //   res.end();//to end the response

  // 2. send html response
  //
  //   res.setHeader("Content-Type", "text/html");
  //   fs.readFile("./views/index.html", (err, data) => {
  //     if (err) {
  //       console.log(err);
  //       res.end();
  //     } else {
  //       //   res.write(data);//for mutiple responses
  //       res.end(data); //if using it once we can put data in end method itself
  //     }
  //   });

  // 3. send multiple response bases on request url
  //
  res.setHeader("Content-Type", "text/html");

  let path = "./views/";

  switch (req.url) {
    case "/": {
      path += "index.html";
      res.statusCode = 200;
      break;
    }
    case "/about": {
      path += "about.html";
      res.statusCode = 200;
      break;
    }
    case "/contactus": {
      path += "contactus.html";
      res.statusCode = 200;
      break;
    }
    case "/about-us": {
      // path += ""//we are redirecting so no path append
      console.log("redirecting to /about");

      res.statusCode = 301; //301: resource moved
      res.setHeader("Location", "/about");
      res.end(); //ending the eresponse is required
      break;
    }

    default: {
      path += "404.html";
      console.log("redirecting to 404..");
      res.statusCode = 404;
      break;
    }
  }

  if (fs.existsSync(path) && path != "./views/") {
    fs.readFile(path, (err, data) => {
      if (err) {
        console.log("no file: ", path);
        console.log("error: ", err);
      }
      res.end(data);
    });
  }
});

server.listen(3000, "localhost", () => {
  console.log("listening to port 3000: ");
});
