const express = require("express");
const router = express.Router();
const commentModel = require("../model/commentModel");

const jwt = require("jsonwebtoken");
const passport = require("passport");

/*get all comments TO BE COMMENTED OUT IN PRODUCTION*/
router.get("/all", (req, res) => {
  commentModel
    .find({})
    .then(files => {
      res.send(files);
    })
    .catch(err => console.log(err));
});

/*add a comment CREATE*/
router.post(
  "/add",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { username, picture } = req.user;
    const newcomment = new commentModel({
      username,
      picture,
      usercomment: req.body.usercomment
    });
    newcomment
      .save()
      .then(comment => {
        res.send(comment._id);
      })
      .catch(err => {
        res.send(err);
      });
  }
);

module.exports = router;
