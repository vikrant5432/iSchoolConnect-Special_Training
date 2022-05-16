const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

mongoose
  .connect(
    "mongodb+srv://admin:PDUDMJFkHXUWGE4P@mycluster.8a7qb.mongodb.net/TestingMong?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
    }
  )
  .then(() => {
    console.log("DB is Connected");
  })
  .catch((err) => {
    console.log("error occur in DB");
  });

app.get("/", (req, res) => {
  res.json({ message: "Welcome" });
});
require("../Router/route.js")(app);

app.listen(3000, (err) => {
  if (err) {
    console.log("Error will listening to port 3000");
  } else {
    console.log("list to http://localhost:3000");
  }
});
