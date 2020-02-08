const express = require("express");
const router = express.Router();
const itineraryModel = require("../model/itineraryModel");

/*get all itineraries*/
router.get("/all", (req, res) => {
    itineraryModel
      .find({})
      .then(files => {
        res.send(files);
      })
      .catch(err => console.log(err));
  });

/*add an Itinerary CREATE*/
router.post("/add", (req, res) => {
      const newItinerary = new itineraryModel({
        name: req.body.name,
        city: req.body.city,
        city_id: req.body.city_id,
        country: req.body.country,
        username: req.body.username,
        photo: req.body.username,
        rating: req.body.rating,
        duration: req.body.duration,
        price: req.body.price,
        hashtags: req.body.hashtags
      });
      console.log("Itinerario ricevuto", req.body);
      newItinerary.save().then(itinerary => {
          res.send(itinerary);
        }).catch(err => {
          console.log("ERRORE ITINERARIO");
          res.status(500).send(err);
        });
      });

/*get one Itinerary READ*/
router.get("/:id", (req, res) => {
  itineraryModel
    .find({ city_id: req.params.id })
    .then(files => {
      res.send(files);
    })
    .catch(err => console.log(err));
});

module.exports = router;
