const User = require("../models/users");
exports.addUser = (req, res, next) => {
  console.log("NEW USER SIGNED", req.body);
  const { name, email, phone } = req.body;
  const user = User.create({ name: name, email: email, phone: phone })
    .then((response) => {
      console.log("USER DETAILS ADDED TO DATABASE");
      res.json(response);
    })
    .catch((error) => console.log(error));
};

exports.getUser = (req, res, next) => {
  User.findAll()
    .then((users) => res.json(users))
    .catch((error) => console.log(error));
};

exports.deleteUser = (req, res, next) => {
  // const { phone } = req.body;
  const { id } = req.body;
  User.findByPk(id)
    .then((user) => {
      console.log("user deleted");
      user.destroy();
    })
    .catch((error) => console.log(error));
};

exports.editUser = (req, res, next) => {};
