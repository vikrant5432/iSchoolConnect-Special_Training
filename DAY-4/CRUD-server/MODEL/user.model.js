const mongoose = require("mongoose");

let Schema = mongoose.Schema;

let User = mongoose.model(
  "user",
  new Schema(
    {
      username: String,
      usercity: String,
      userpercentage: String,
    },
    {
      timestamps: true,
    }
  )
);

module.exports = User;
