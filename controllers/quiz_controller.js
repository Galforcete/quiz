var models = require('../models/models.js');

// GET /quizes
exports.index = function(req, res) {
	models.Quiz.findAll().then(
		function(quizes){
			res.render('quizes/index', { quizes: quizes});
		}
	).catch(function(error){ next(error);})
};

// GET /quizes/:id
exports.show = function(req, res) {	
	res.render('quizes/show', { quiz: req.quiz });
};

// GET /quizes/:id/answer
exports.answer = function(req, res) {
	var resultado = 'Incorrecto';
	if(req.query.respuesta === req.quiz.respuesta){
		resultado = 'Correcto';
	}
	res.render('quizes/show', { quiz: req.quiz, respuesta: resultado });	
};
