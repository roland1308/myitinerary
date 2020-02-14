const express = require("express");
const router = express.Router();
const userModel = require("../model/userModel");

const bcrypt = require("bcrypt");
const saltRounds = 10;

const { check, validationResult } = require("express-validator");
const app = express();

app.use(express.json());

const key = require("../keys.js");
const jwt = require("jsonwebtoken");

const multer = require("multer");
const upload = multer({dest: "uploads/"});

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
    // email must be an email
    check("email").isEmail(),
    // password must be at least 5 chars long
    check("pw").isLength({ min: 5 }),
    upload.single("picture")
  ],
  (req, res) => {
    console.log(req.file);
    // console.log(req.body);
    // console.log(req.headers);
    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
    userModel
      .findOne({
        userName: req.body.userName
      })
      .then(exists => {
        if (exists) {
          console.log("Nome utente esistente", exists);
          res.send("ESISTE UTENTE");
        } else {
          userModel
            .findOne({
              email: req.body.email
            })
            .then(exists => {
              if (exists) {
                console.log("Indirizzo email esistente", exists);
                res.send("ESISTE EMAIL");
              } else {
                bcrypt.hash(req.body.pw, saltRounds).then(function(hash) {
                  // Store hash in your password DB.
                  const newUser = new userModel({
                    userName: req.body.userName,
                    email: req.body.email,
                    picture: req.body.picture,
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
      userName: req.body.userName
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
              userName: user.userName,
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
