const express = require("express");
const router = express.Router();
/***************START CRUD ******************/
//4-Create Your Schema
const Commande = require("../models/Commande");
//ADD A NEW Commande
//PATH : /add_Commande
router.post("/add_Commande", (req, res) => {
  const {date } = req.body;
  const newCommande = new Commande({ date }); // create a new document
  newCommande
    .save()
    .then((commande) => res.send(commande))
    .catch((err) => res.status(400).send({ msg: "ERROR ADD" }));
});
//GET ALL CommandeS
// PATH :/commandes
router.get("/commandes", (req, res) => {
    Commande.find()
    .then((commandes) => res.send(commandes))
    .catch((err) => res.status(400).send({ msg: "ERROR GET Commandes" }));
});
//GET ARTICLES BY ID
//PATH : /commandes/:commandeID
router.get("/commandes/:commandeID", (req, res) => {
  const id = req.params.commandeID;
  Commande.findById(id)
    .then((commande) => {
      if (!commande) {
        return res.status(404).send({ msg: "Commande Not Found " });
      }
      res.send(commande);
    })
    .catch((err) => res.status(400).send({ msg: "ERROR GET Commande BY ID" }));
});
//DELETE Commande BY ID
//PATH :/commandes/:commandeID
router.delete("/commandes/:commandeID", (req, res) => {
  const id = req.params.commandeID;
  Commande.findByIdAndDelete(id) //findOneAndDelete( {_id : value of the id }  )
    .then((commande) => {
      if (!commande) {
        return res.status(404).send({ msg: "commande Not Found " });
      }
      res.send(commande);
    })
    .catch((err) => res.status(400).send({ msg: "Error Remove commande " }));
});
//UPDATE Commande BY ID
//PATH : /commandes/:commandeID
router.put("/commandes/:commandeID", (req, res) => {
  const commandeID = req.params.commandeID;
  Commande.findByIdAndUpdate(commandeID, req.body, { new: true })
    .then((commande) => {
      if (!commande) {
        return res.status(404).send({ msg: "commande Not Found " });
      }
      res.send(commande);
    })
    .catch((err) => res.status(400).send({ msg: "ERROR" }));
});
/****************END CRUD *******************/
module.exports = router;