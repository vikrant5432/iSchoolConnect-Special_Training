const USER = require("../MODEL/user.model");

exports.creates = (req, res) => {
  const user = new USER({
    username: req.body.username,
    usercity: req.body.usercity,
    userpercentage: req.body.userpercentage,
  });

  user
    .save()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message,
      });
    });
};

exports.findAll = (req, res) => {
  USER.find()
    .then((users) => {
      res.send(users);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message,
      });
    });
};

exports.update = (req, res) => {
  USER.findByIdAndUpdate(
    req.params.id,
    {
      username: req.body.username,
      usercity: req.body.usercity,
      userpercentage: req.body.userpercentage,
    },
    { new: true }
  )
    .then((note) => {
      if (!note) {
        return res.status(404).send({
          message: "USER not found with id " + req.params.noteId,
        });
      }
      res.send(note);
    })
    .catch((err) => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: "USER not found with id " + req.params.noteId,
        });
      }
      return res.status(500).send({
        message: "Error updating USER with id " + req.params.noteId,
      });
    });
};

exports.deletes = (req, res) => {
  USER.findByIdAndRemove(req.params.id)
    .then((user) => {
      if (!user) {
        return res.status(400).send({
          message: "User in not found with id:" + req.params.id,
        });
      }
      res.send({ message: "User delete Successfully" });
    })
    .catch((err) => {
      if (err.kind === "ObjectId" || err.name === "NotFound") {
        return res.status(404).send({
          message: "USER not found with id " + req.params.noteId,
        });
      }
      return res.status(500).send({
        message: "Error deleting USER with id " + req.params.noteId,
      });
    });
};
