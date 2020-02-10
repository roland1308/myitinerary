const express = require("express");
const router = express.Router();
const activityModel = require("../model/activityModel");

/*get all activities*/
router.get("/all", (req, res) => {
    activityModel
      .find({})
      .then(files => {
        res.send(files);
      })
      .catch(err => console.log(err));
  });

/*add an Activity CREATE*/
router.post("/add", (req, res) => {
      const newActivity = new activityModel({
        name: req.body.name,
        username: req.body.username,
        user_id: req.body.user_id,
        address: req.body.address,
        city: req.body.city,
        photo: req.body.photo,
        time: req.body.time,
        cost: req.body.cost,
        comments: req.body.comments
      });
      console.log("Attività ricevuta", req.body);
      newActivity.save().then(activity => {
          res.send(activity);
        }).catch(err => {
          console.log("ERRORE ATTIVITÀ");
          res.status(500).send(err);
        });
      });

/*get one Activity READ*/
router.get("/:id", (req, res) => {
  activityModel
    .find({ city_id: req.params.id })
    .then(files => {
      res.send(files);
    })
    .catch(err => console.log(err));
});

module.exports = router;
