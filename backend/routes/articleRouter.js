
const express = require("express");
const auth = require('../middlewares/isAuth');
const User = require('../models/User')
const router = express.Router();

/***************START CRUD ******************/
//4-Create Your Schema
const Article = require("../models/Article");
//ADD A NEW Article
//PATH : /add_Article
router.post("/add_Article", (req, res) => {
  // const PostedBy= User.findById(req.user._id).select('-password');
  // code = PostedBy.name
  const  {code ,quantite ,prix,description ,couleur , categorie ,like }  = req.body;
  const newArticle = new Article( {code  ,prix,description,quantite ,couleur ,categorie,like }); // create a new document
  newArticle
    .save()
    .then((article) => res.send(article))
    .catch((err) => res.status(400).send({ msg: "ERROR ADD" }));
});
//ADD A NEW Article t-shirt


//GET ALL Article
// PATH :/articles
router.get("/articles", (req, res) => {
    Article.find()
    .then((articles) => res.send(articles))
    .catch((err) => res.status(400).send({ msg: "ERROR GET ARTICLES" }));
});

//GET ARTICLES BY ID
//PATH : /articles/:articleID
router.get("/articles/:articleID", (req, res) => {
  const id = req.params.articleID;
  Article.findById(id)
    .then((article) => {
      if (!article) {
        return res.status(404).send({ msg: "ARTICLE Not Found " });
      }
      res.send(article);
    })
    .catch((err) => res.status(400).send({ msg: "ERROR GET article BY ID" }));
});

//DELETE article BY ID
//PATH : /articles/:articleID
router.delete("/articles/:articleID", (req, res) => {
  const id = req.params.articleID;
  Article.findByIdAndDelete(id) //findOneAndDelete( {_id : value of the id }  )
    .then((article) => {
      if (!article) {
        return res.status(404).send({ msg: "article Not Found " });
      }
      res.send(article);
    })
    .catch((err) => res.status(400).send({ msg: "Error Remove article " }));
});

//UPDATE ARTICLE BY ID
//PATH : /articles/:articleID
router.put("/articles/:articleID", (req, res) => {
  const articleID = req.params.articleID;
  Article.findByIdAndUpdate(articleID, req.body, { new: true })
    .then((article) => {
      if (!article) {
        return res.status(404).send({ msg: "ARTICLE Not Found " });
      }
      res.send(article);
    })
    .catch((err) => res.status(400).send({ msg: "ERROR" }));
});



/****************END CRUD *******************/

module.exports = router;

