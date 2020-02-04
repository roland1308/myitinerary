const express = require("express");
const router = express.Router();
const cityModel = require("../model/cityModel");

/*get all cities*/
router.get("/all", (req, res) => {
  cityModel
    .find({})
    .then(files => {
      res.send(files);
    })
    .catch(err => console.log(err));
});

/*add a City if not existing already CREATE*/
router.post("/", (req, res) => {
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

/*get one city READ*/
router.get("/:name", (req, res) => {
  cityModel
    .find({name:req.params.name})
    .then(files => {
      console.log(files);
      res.send(files);
    })
    .catch(err => console.log(err));
});

/*update one city UPDATE*/
router.put("/:name/:newname", (req, res) => {
  cityModel.findOneAndUpdate(
      { name: req.params.name },
      { $set: {
        name: req.params.newname }
      })
      .then(old => {
        if (old !== null) {
          res.json(old);
          console.log("Città aggiornata")
        } else {
          console.log("ERRORE AGGIORNAMENTO");
          res.json(old);
        };
      })
  });

// router.get('/test',
//     (req, res) => {
//         res.send({
//             msg: "Hola funciona"
//         })
//     })

module.exports = router;
