const express = require("express")
const router = express.Router();
/***************START CRUD ******************/
//4-Create Your Schema
const Entreprise = require("../models/Entreprise");
//ADD A NEW Entreprise
//PATH : /Entreprise
router.post("/add_Entreprise", (req, res) => {
  const { nameEntreprise ,lastName , email ,password ,adress ,numTel} = req.body;
  const newEntreprise = new Entreprise({ nameEntreprise ,lastName , email ,password ,adress ,numTel }); // create a new document
  newEntreprise
    .save()
    .then((entreprise) => res.send(entreprise))
    .catch((err) => res.status(400).send({ msg: "ERROR ADD" }));
});
//GET ALL Entreprise
// PATH :/entreprises
router.get("/entreprises", (req, res) => {
    Entreprise.find()
    .then((entreprises) => res.send(entreprises))
    .catch((err) => res.status(400).send({ msg: "ERROR GET Entreprise" }));
});
//GET Entreprise BY ID
//PATH : /entreprises/:entrepriseID
router.get("/entreprises/:entrepriseID", (req, res) => {
  const id = req.params.entrepriseID;
  Entreprise.findById(id)
    .then((entreprise) => {
      if (!entreprise) {
        return res.status(404).send({ msg: "Entreprise Not Found " });
      }
      res.send(entreprise);
    })
    .catch((err) => res.status(400).send({ msg: "ERROR GET Entreprise BY ID" }));
});
//DELETE entreprise BY ID
//PATH : /entreprises/:entrepriseID
router.delete("/entreprises/:entrepriseID", (req, res) => {
  const id = req.params.entrepriseID;
  Entreprise.findByIdAndDelete(id) //findOneAndDelete( {_id : value of the id }  )
    .then((entreprise) => {
      if (!entreprise) {
        return res.status(404).send({ msg: "entreprise Not Found " });
      }
      res.send(entreprise);
    })
    .catch((err) => res.status(400).send({ msg: "Error Remove Entreprise " }));
});
//UPDATE ENTREPRISE BY ID
//PATH : /entreprises/:entrepriseID
router.put("/entreprises/:entrepriseID", (req, res) => {
  const entrepriseID = req.params.entrepriseID;
  Entreprise.findByIdAndUpdate(entrepriseID, req.body, { new: true })
    .then((entreprise) => {
      if (!entreprise) {
        return res.status(404).send({ msg: "Entreprise Not Found " });
      }
      res.send(entreprise);
    })
    .catch((err) => res.status(400).send({ msg: "ERROR" }));
});
module.exports = router;
