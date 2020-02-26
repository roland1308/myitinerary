const express = require("express");
const router = express.Router();
const commentModel = require("../model/commentModel");

/*get all comments*/
router.get("/all", (req, res) => {
  commentModel
    .find({})
    .then(files => {
      res.send(files);
    })
    .catch(err => console.log(err));
});

/*add a comment CREATE*/
router.post("/add", (req, res) => {
  const newcomment = new commentModel({
    userid: req.body.userid,
    usercomment: req.body.usercomment
  });
  newcomment
    .save()
    .then(comment => {
      res.send(comment);
    })
    .catch(err => {
      res.send(err);
    });
});

module.exports = router;
