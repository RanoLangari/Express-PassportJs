const express = require("express");
const passport = require("passport");
const Router = express.Router();
const userController = require("../controller/userController");
const { protect } = require("./protect");

Router.post("/auth/login", userController.Login);
Router.post("/auth/register", userController.Register);

Router.get("/auth/google", passport.authenticate("google", { scope: ["profile", "email"] }));

Router.get("/auth/google/callback", passport.authenticate("google", { failureRedirect: "http://localhost:3000/" }), function (req, res) {
  res.redirect("http://localhost:3000/dashboard");
});

Router.get("/profile", (req, res) => {
  res.status(200).json({ user: req.session.passport });
});

Router.get("/auth/logout", userController.LogOut);

Router.get("/auth/github", passport.authenticate("github", { scope: ["user:email"] }));
Router.get("/auth/github/callback", passport.authenticate("github", { failureRedirect: "http://localhost:3000/" }), function (req, res) {
  res.redirect("http://localhost:3000/dashboard");
});

module.exports = Router;
