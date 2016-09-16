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
      // res.render("questions/show", {question: question});
      res.redirect("/questions/" + question._id);
    }
  });
});

router.get("/:id", function(req, res, next){
  Question.findOne({_id: req.params.id}, function(err, question){
    if(err){
      // res.render("error", {message: "Question not found", error: {status: 404}})
      next();
    } else {
      res.render("questions/show", {question: question});
    }
  });
});

router.delete("/:id", function(req, res){
  Question.remove({_id: req.params.id}, function(err){
    res.redirect("/");
  });
});

router.post("/:question_id/answers", function(req, res){
  Question.findOne({_id: req.params.question_id}, function(err, question){
    if(err){
      next();
    } else {
      question.answers.push({body: req.body.body});
      question.save(function(err, answer){
        if(err) {
          // TODO: redisplay show page for question with errors
          next();
        } else {
          res.redirect("/questions/" + question._id);
        }
      });
    }
  });
});

// in order to include a module in another file you have to define what
// module.exports is equal to in order for the other file to know what to use
// from this file.
module.exports = router;
