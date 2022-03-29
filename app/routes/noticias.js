const dbConnection = require('../../config/dbConnection');

module.exports=function(app){ //criação do modulo para a rota noticias
	var connection=dbConnection();

	app.get('/noticias',function(req,res){

		connection.query('select * from noticias', function(error,result){
			if (error){
				console.log(error);
			}
			//resposta do query para cliente
			res.render('./noticias/noticias.ejs', {noticias:result}); //envia a respostas na variavel result
		});
	});
}