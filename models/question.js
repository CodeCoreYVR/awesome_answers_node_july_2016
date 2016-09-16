var mongoose = require("mongoose");

var QuestionSchema = mongoose.Schema({
  title: {type: String, required: true},
  body:  {type: String}
});

var Question = mongoose.model('Question', QuestionSchema);

module.exports = Question;
