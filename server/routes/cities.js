const express = require("express");
const router = express.Router();
const cityModel = require("../model/cityModel");
const mongoose = require("mongoose");

/*get all cities*/
router.get("/all", (req, res) => {
  cityModel
    .find({})
    .then(files => {
      res.send(files);
    })
    .catch(err => console.log(err));
});

router.post("/", (req, res) => {
  // let City = mongoose.model('City', citySchema);

    cityModel.findOne({ name: req.body.name })
    .then (exists => {
        if (exists) {
            console.log("Cittá esistente", exists);
            res.send("ESISTE");
        } else {
            const newCity = new cityModel({
                name: req.body.name,
                country: req.body.country,
                url: req.body.url
            });
            console.log("Cittá aggiunta");
            newCity
            .save()
            .then(city => {
            res.send(city);
            })
            .catch(err => {
            console.log("ERRORE CITTÀ ESISTENTE");
            res.status(500).send(err);
            });
        };
    });
})
// router.get('/test',
//     (req, res) => {
//         res.send({
//             msg: "Hola funciona"
//         })
//     })

module.exports = router;
