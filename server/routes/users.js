const express = require("express");
const router = express.Router();
const userModel = require("../model/userModel");

const fs = require("fs");
const { promisify } = require("util");
const unlinkAsync = promisify(fs.unlink);

const bcrypt = require("bcrypt");
const saltRounds = 10;

const { check, validationResult } = require("express-validator");
const app = express();

app.use(express.json());

const key = require("../config/keys.js");
const jwt = require("jsonwebtoken");

const passport = require("passport");

const multer = require("multer");
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, "./uploads/");
  },
  filename: function(req, file, cb) {
    const now = new Date().toISOString();
    const date = now.replace(/:/g, "-");
    cb(null, date + file.originalname);
  }
});
const upload = multer({ storage: storage });

/*get all users*/
router.get("/all", (req, res) => {
  userModel
    .find({})
    .then(files => {
      res.send(files);
    })
    .catch(err => console.log(err));
});

/*add a User if not existing already CREATE*/
router.post("/add", [upload.single("picture")], (req, res) => {
  bcrypt.hash(req.body.pw, saltRounds).then(function(hash) {
    // Store hash in your password DB.
    const newUser = new userModel({
      username: req.body.username,
      email: req.body.email,
      picture: "uploads/" + req.file.filename,
      pw: hash
    });
    newUser
      .save()
      .then(user => {
        res.send(user);
      })
      .catch(err => {
        //Delete uploaded avatar
        unlinkAsync(req.file.path);
        res.send(err);
      });
  });
});

// Login user
router.post("/login", (req, res) => {
  userModel
    .findOne({
      username: req.body.username
    })
    .then(user => {
      // provide error if user does not correspond with email of one user in the database
      if (!user) {
        console.log("Nome utente non trovato");
        res.send("UTENTE INESISTENTE");
      } else {
        // compare passwords with bycript compare function
        bcrypt.compare(req.body.pw, user.pw, function(err, result) {
          if (!result) {
            console.log("PW ERRATA", err);
            res.send("PW ERRATA");
          } else {
            // create JWT payload, sign token and send it back
            res.send(user);
          }
        });
      }
    });
});

// JWT Authentication
router.get(
  "/aut",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    userModel
      .findOne({ _id: req.user.id })
      .then(user => {
        res.json(user);
      })
      .catch(err => res.status(404).json({ error: "User does not exist!" }));
  }
);

// JWT TOKEN Translation
router.get(
  "/check",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.json(req.user);
  }
);

//GOOGLE Authentication
router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile", "email"]
  })
);

router.get(
  "/google/redirect",
  passport.authenticate("google", {
    failureRedirect: "http://localhost:3000/createaccount",
    session: false
  }),
  function(req, res) {
    res.redirect("http://localhost:3000/storetoken/?token=" + req.user);
  }
);

router.post("/token", (req, res) => {
  const payload = {
    _id: req.body._id,
    username: req.body.username,
    picture: req.body.picture
  };
  const options = { expiresIn: 604800 };
  const token = jwt.sign(payload, key.secretOrKey, options);
  res.send(token);
});

module.exports = router;
