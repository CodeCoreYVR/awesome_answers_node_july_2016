var express   = require("express");
var router    = express.Router();
var Question  = require("../models/question");

router.get("/new", function(request, response, next){
  response.render("questions/new", {name: "Tam", errors: {}});
});

router.post("/", function(req, res, next){
  var question = new Question({title: req.body.title, body: req.body.body});
  question.save(function(err, question){
    if(err) {
      res.render("questions/new", {errors: err.errors});
    } else {

    }
  });
});

// in order to include a module in another file you have to define what
// module.exports is equal to in order for the other file to know what to use
// from this file.
module.exports = router;
