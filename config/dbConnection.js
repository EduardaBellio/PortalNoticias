const mysql=require('mysql'); //importação mysql

module.exports=function(){
	return mysql.createConnection({ 
		host:'localhost',
		user:'root',
		password:'ifms',
		database:'portal_noticias'
	}); //cria coneção com o banco de dados;
}