module.exports=function(app){ //criação do modulo para a rota admin

//rota para a página do formulário de inclusão de noticia
app.get('/formularioinclusaonoticia',(req,res)=>{
	res.render('admin/form_add_noticia.ejs')
});

}