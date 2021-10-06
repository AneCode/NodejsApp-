var express=require('express');
var app=express();
app.use(express.static('public'));
var hbs=require('express3-handlebars');
app.engine('hbs',hbs({
	extname : 'hbs' , defaultLayout :'main' , layoutDir :__dirname + '/views/layouts' 
}));
app.set('view engine' , 'hbs' );

app.get('/login' , function( req , res ) 
	{
	  // res.render( 'index',{
	  // 	imageToggle:true 
	  // });
	  var x= req.query.user;
	  var name=['person1.jpg','person2.jpg','person3.jpg','person4.jpg'];
	  var user=['Shahrukh Khan','Berlin','Professor','Denver'];
	   res.render( 'index2',{
	  	imageToggle:true,
	  	pname:name[x%4],
	  	puser:user[x%4], 
	  });
	});
  

app.listen(9005);

