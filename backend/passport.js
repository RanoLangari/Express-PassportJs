const GoogleStrategy = require("passport-google-oauth20").Strategy;
const passport = require("passport");
const bcrypt = require("bcrypt");
const User = require("./model/userModel.js");
require("dotenv").config();

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;
const saltRounds = 10;

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
    },
    async function (accessToken, refreshToken, profile, done) {
      try {
        const userMatch = await User.findOne({
          where: {
            email: profile.emails[0].value,
          },
        });
        if (bcrypt.compareSync(profile.id, userMatch.password)) {
          return done(null, userMatch);
        } else {
          const user = await User.create({
            email: profile.emails[0].value,
            username: profile.displayName,
            password: bcrypt.hashSync(profile.id, saltRounds),
          });
          return done(null, user);
        }
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
