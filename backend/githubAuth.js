var GitHubStrategy = require("passport-github2").Strategy;
const passport = require("passport");
const User = require("./model/userModel.js");
require("dotenv").config();

const GITHUB_CLIENT_ID = process.env.GITHUB_CLIENT_ID;
const GITHUB_CLIENT_SECRET = process.env.GITHUB_CLIENT_SECRET;

passport.use(
  new GitHubStrategy(
    {
      clientID: GITHUB_CLIENT_ID,
      clientSecret: GITHUB_CLIENT_SECRET,
      callbackURL: "/auth/github/callback",
    },
    async function (accessToken, refreshToken, profile, done) {
      try {
        const match = await User.findOne({
          where: {
            email: profile.emails[0].value,
          },
        });
        if (match) {
          return done(null, match);
        }
        const user = await User.create({
          email: profile.emails[0].value,
          username: profile.username,
          password: profile.id,
        });
        return done(null, user);
      } catch (error) {
        console.log(error);
      }
    }
  )
);
passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});
