const express = require("express");
const router = express.Router();
/***************START CRUD ******************/
//4-Create Your Schema
const Reclamation = require("../models/Reclamation");
//ADD A NEW Reclamation
//PATH : /add_Reclamation
router.post("/add_Reclamation", (req, res) => {
  const {  date, contenu,type} = req.body;
  const newReclamation = new Reclamation({ date, contenu,type }); // create a new document
  newReclamation
    .save()
    .then((reclamation) => res.send(reclamation))
    .catch((err) => res.status(400).send({ msg: "ERROR ADD" }));
});
//GET ALL Reclamation
// PATH :/reclamations
router.get("/reclamations", (req, res) => {
    Reclamation.find()
    .then((reclamations) => res.send(reclamations))
    .catch((err) => res.status(400).send({ msg: "ERROR GET Reclamation" }));
});
//GET Reclamation BY ID
//PATH : /reclamations/:reclamationID
router.get("/reclamations/:reclamationID", (req, res) => {
  const id = req.params.reclamationID;
  Reclamation.findById(id)
    .then((reclamation) => {
      if (!reclamation) {
        return res.status(404).send({ msg: "Reclamation Not Found " });
      }
      res.send(reclamation);
    })
    .catch((err) => res.status(400).send({ msg: "ERROR GET article BY ID" }));
});
//DELETE reclamation BY ID
//PATH : /reclamations/:reclamationID
router.delete("/reclamations/:reclamationID", (req, res) => {
  const id = req.params.reclamationID;
  Reclamation.findByIdAndDelete(id) //findOneAndDelete( {_id : value of the id }  )
    .then((reclamation) => {
      if (!reclamation) {
        return res.status(404).send({ msg: "Reclamation  Not Found " });
      }
      res.send(reclamation);
    })
    .catch((err) => res.status(400).send({ msg: "Error Reclamation article " }));
});
//UPDATE Reclamation BY ID
//PATH : /reclamations/:reclamationID
router.put("/reclamations/:reclamationID", (req, res) => {
  const reclamationID = req.params.reclamationID;
  Reclamation.findByIdAndUpdate(reclamationID, req.body, { new: true })
    .then((reclamation) => {
      if (!reclamation) {
        return res.status(404).send({ msg: "ARTICLE Not Found " });
      }
      res.send(reclamation);
    })
    .catch((err) => res.status(400).send({ msg: "ERROR" }));
});
/****************END CRUD *******************/
module.exports = router;