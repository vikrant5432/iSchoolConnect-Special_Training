module.exports = (app) => {
  const users = require("../controls/user.control.js");

  app.post("/user", users.creates);

  app.get("/user", users.findAll);

  app.put("/user/:id", users.update);

  app.delete("/user/:id", users.deletes);
};
