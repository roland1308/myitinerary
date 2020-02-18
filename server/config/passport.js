const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const User = require("../model/userModel");
const key = require("./keys");
const passport = require("passport");

//JWT Strategy
const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = key.secretOrKey;

module.exports = passport.use(
  new JwtStrategy(opts, (jwt_payload, done) => {
    User.findById(jwt_payload._id)
      .then(user => {
        if (user) {
          return done(null, user);
        }
        return done(null, false);
      })
      .catch(err => console.log(err));
  })
);

//GOOGLE Strategy
var GoogleStrategy = require("passport-google-oauth20").Strategy;

passport.use(
  new GoogleStrategy(
    {
      clientID: key.google.ID_client,
      clientSecret: key.google.Client_Secret,
      callbackURL: "http://localhost:5000/users/google/redirect"
    },
    (accessToken, refreshToken, profile, cb) => {
      console.log("passport callback function");
      console.log(profile);
      // User.findOrCreate({ googleId: profile.id }, function(err, user) {
      //   return cb(err, user);
      // });
    }
  )
);
