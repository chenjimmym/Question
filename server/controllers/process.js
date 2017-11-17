var mongoose = require('mongoose');
var Question = mongoose.model('Question');
var Answer = mongoose.model('Answer');

module.exports = {

    addQuestion: function(req, res){
        var question = new Question({question: req.body.question, description: req.body.description});
        console.log('from process', question);
        question.save(function(err){
            if(err){
                console.log(err);
            } else {
                console.log('Question Added!');
            }
        })
    },

    getAllQuestion: function(req, res){
        // Question.find({}, function(err, questions){
        //     res.json(questions);
        // })
        Question.find({}).populate('answer').exec(function(err, questions){
            res.json(questions);
        })
    },

    getOneQuestion: function(req, res){
        Question.findOne({_id: req.params.id}).populate('answer').exec(function(err, question){
            res.json(question);
        })
    },

    addAnswer: function(req, res){
        Question.findOne({_id: req.params.id}, function(err, question){
            var answer = new Answer({_question: question._id, asker: req.body.asker, answer: req.body.answer, detail: req.body.detail, like: 0});
            answer.save(function(err){
                if (err){
                    console.log(err);
                } else {
                    question.answer.push(answer);
                    question.save(function(err){
                        if (err){
                            console.log(err);
                        } else {
                            console.log('Answer Added!');
                        }
                    })
                    
                }
            })
        })
    }
}