var mongoose = require('mongoose');
var Question = mongoose.model('Question');
var Answer = mongoose.model('Answer');

var process = require('../controllers/process.js');

module.exports = function(app){

    app.post('/addquestion', function(req, res) {
        process.addQuestion(req, res);
    });

    app.get('/questions', function(req, res) {
        process.getAllQuestion(req, res);
    });

    app.get('/question/:id', function(req, res) {
        process.getOneQuestion(req, res);
    });

    app.post('/addAnswer/:id', function(req, res) {
        process.addAnswer(req, res);
    });

    // app.all("*", (req,res,next) => {
    //     res.sendFile(path.resolve("./../../public/dist/index.html"))
    // });

}