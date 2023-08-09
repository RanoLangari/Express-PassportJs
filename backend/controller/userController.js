const user = require("../model/userModel.js");
const bcrypt = require("bcrypt");
const saltRounds = 10;
exports.Login = (req, res) => {
  const { email, username, password } = req.body;
  user
    .findOne({
      where: {
        email: email,
      },
    })
    .then((user) => {
      if (user) {
        if (bcrypt.compareSync(password, user.password)) {
          req.session.passport = user;
          res.status(200).json({ user: user });
        } else {
          res.status(200).json({ message: "password salah" });
        }
      } else {
        res.status(200).json({ message: "email tidak terdaftar" });
      }
    });
};

exports.Register = (req, res) => {
  const { email, username, password } = req.body;
  user
    .create({
      email: email,
      username: username,
      password: bcrypt.hashSync(password, saltRounds),
    })
    .then((user) => {
      req.session.passport = user;
      res.status(200).json({ user: user });
    })
    .catch((err) => {
      res.status(200).json({ message: err.message });
    });
};

exports.LogOut = (req, res) => {
  req.session = null;
  res.redirect("http://localhost:3000/");
};
