const express = require("express");
const bodyparser = require("body-parser");
const Router = require("./routes/userRoutes.js");
const passport = require("passport");
const cors = require("cors");
const session = require("express-session");
require("./passport.js");
require("./githubAuth.js");
require("dotenv").config();
const port = process.env.PORT;

const App = express();
App.use(
  session({
    secret: "secret",
    resave: true,
    saveUninitialized: true,
  })
);
App.use(bodyparser.json());
App.use(bodyparser.urlencoded({ extended: true }));
App.use(
  cors({
    header: "access-control-allow-origin",
    origin: "http://localhost:3000",
    credentials: true,
  })
);
App.use(Router);

App.use(passport.initialize());
App.use(passport.session());

App.listen(port, () => {
  console.log(`Server Berjalan Pada http://localhost${port}`);
});
