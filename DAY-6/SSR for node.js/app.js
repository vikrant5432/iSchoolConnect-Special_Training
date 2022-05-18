const express = require("express");
const app = express();
const ejs = require("ejs");
var fs = require("fs");

app.get("/", (req, res) => {
  ejs.renderFile("index.ejs", {}, {}, (err, data) => {
    if (err) {
      throw err;
    } else res.send(data);
  });
});

app.listen(3000, console.log("Server is activate on http:localhost:3000"));
