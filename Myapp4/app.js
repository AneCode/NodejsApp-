var express=require('express');
var app=express();
// app.use(express.static('public'));
// var hbs=require('express3-handlebars');
// app.engine('hbs',hbs({
// 	extname:'hbs',defaultLayout:'main',layoutDir:__dirname+'/views/layouts'

// }));
// app.set('view engine','hbs');
var cookieParser = require('cookie-parser');
 app.use(cookieParser());
// app.get('/' , function( req , res ) 
// 	{  
// 		// res.attachment();
// 		//  res.sendFile(__dirname + '/public' +'/car.jpg' );
// 		// res.download(__dirname+'/public/car.jpg',function(err){
// 		// // 	if(err){
// 		// 		console.log(err);
// 		// 	}
// 		// 	else{
// 		// 		console.log('downlaod completing:');
// 		// 	}
// 		// })
// 		// res.cookie('coaching','Prolog',{maxAge:9000,http:true  });
// 		res.cookie( 'courses' , {courses : ['C' , 'CPP' , 'JAVA' , 'WD'] 
// 			,mentors:['Tausif', 'Jahid' ]});
// 		res.send('cookie');

// 	});
  
app.get('/setCookie' , function( req , res ) {
res.cookie('courses' , ['Wd','Java'] );
res.send('Cookie is set');
} );

app.get('/getCookie' , function( req , res ) {
	for(var i=0;i<2;i++)
res.send('Cookie is '+ req.cookies.courses);
for(var i=0;i<2;i++)
console.log(req.cookies.courses[i])
// res.send('Cookie is'+ req.cookies[‘college’]);
} );





app.listen(9005);
