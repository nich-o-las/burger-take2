var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  burger.findAll({}).then(result => {
    const hbObj = {
      burgers: result
    };
    res.render("index", hbObj);
  });
});

router.post("/", function(req, res) {
  burger.create({
    description: req.body.description
  }).then(() => res.redirect("/"));
});

router.put("/:id", function(req, res){
  burger.update(
    {eaten: req.body.eaten},
    {where: {id: req.params.id}}
  ).then((result) => res.send(result))
});

router.delete("/:id", function(req, res){
  burger.destroy(
    {where: {id: req.params.id}}
  ).then(() => {})
});

module.exports = router;
