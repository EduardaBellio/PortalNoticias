module.exports=function(app){ //criação do modulo para a rota home

app.get('/',function(req,res){ //rota para a página principal do app
	res.render('home/index.ejs')
})
}