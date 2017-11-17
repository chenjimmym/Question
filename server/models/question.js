var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var QuestionSchema = new mongoose.Schema({
    question: String,
    description: String,
    answer: [{type: Schema.Types.ObjectId, ref: 'Answer'}] 
});

var AnswerSchema = new mongoose.Schema({
    _question: {type:Schema.Types.ObjectId, ref: 'Question'},
    asker: String,
    answer: String,
    detail: String,
    like: Number
});

var Question = mongoose.model('Question', QuestionSchema);
var Answer = mongoose.model('Answer', AnswerSchema);