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

const key = require("../keys.js");
const jwt = require("jsonwebtoken");

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
router.post(
  "/add",
  [
    upload.single("picture"),
    check("email").isEmail(),
    check("pw").isLength({ min: 5 })
  ],
  (req, res) => {
    console.log(req.body);
    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req.body);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
    userModel
      .findOne({
        username: req.body.username
      })
      .then(exists => {
        if (exists) {
          console.log("Nome utente esistente", exists);
          res.send("ESISTE UTENTE");
          unlinkAsync(req.file.path);
        } else {
          userModel
            .findOne({
              email: req.body.email
            })
            .then(exists => {
              if (exists) {
                console.log("Indirizzo email esistente", exists);
                res.send("ESISTE EMAIL");
                unlinkAsync(req.file.path);
              } else {
                bcrypt.hash(req.body.pw, saltRounds).then(function(hash) {
                  // Store hash in your password DB.
                  const newUser = new userModel({
                    username: req.body.username,
                    email: req.body.email,
                    picture:
                      "http://localhost:5000/uploads/" + req.file.filename,
                    pw: hash
                  });
                  console.log("Utente aggiunto");
                  newUser
                    .save()
                    .then(user => {
                      res.send(user);
                    })
                    .catch(err => {
                      console.log("ERRORE UTENTE ESISTENTE");
                      res.status(500).send(err);
                    });
                });
              }
            });
        }
      });
  }
);

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
            const payload = {
              _id: user._id,
              username: user.username,
              picture: user.picture
            };
            // expires in one week
            const options = { expiresIn: 604800 };
            jwt.sign(payload, key.secretOrKey, options, (err, token) => {
              if (err) {
                res.json({
                  success: false,
                  token: "There was an error"
                });
              } else {
                res.json({
                  success: true,
                  token: token
                });
              }
            });
          }
        });
      }
    });
});

module.exports = router;
