var express = require("express");

var router = express.Router();
var db = require("../models");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  db.sandwich.findAll({}).then(result => {
    const hbObj = {
      burgers: result
    };
    res.render("index", hbObj);
  });
});

router.post("/", function(req, res) {
  db.sandwich.create({
    description: req.body.description,
    validate: { len: [1] }
  }).then(() => res.redirect("/"));
});

router.put("/:id", function(req, res){
  db.sandwich.update(
    {eaten: req.body.eaten},
    {where: {id: req.params.id}}
  ).then((result) => res.send(result))
});

router.delete("/:id", function(req, res){
  db.sandwich.destroy(
    {where: {id: req.params.id}}
  ).then(result => res.sendStatus(200))
});  

module.exports = router;
