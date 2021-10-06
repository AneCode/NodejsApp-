http = require('http');
var fs=require('fs');


 var server=http.createServer( function( request, response )
 	 {
 	    var filename, contentType="text/html";
 	    var path=request.url;
 	    // response.writeHead(200);
 	    // response.write('hello');
 	    // response.end();
 	    switch(path){
 	    	case '/' : filename="index.html";
 	    	             break;
 	    	case '/index.html': filename='index.html';
 	    						 break;
 	        case '/car.jpg' :filename="car.jpg";
 	                          contentType='image/jpg';
 	                          break;
 	        case '/style.css' :filename="style.css";
 	         				     contentType="text/css";
 	                            break;            
 	    }
 	    console.log(filename,contentType);
 	    fs.readFile(__dirname + '/public/' + filename , function ( err , data )
 	     { 
 	     	if ( err ) 
 	     		{
 	     		 response.writeHead(404);
 	     		  response.end('Page Not Found'); 
 	     		} 
 	     		else
 	     		 { 
 	     		 	response.writeHead(200, { 'Content-type' : contentType });
 	     		 	response.end( data );
 	     		 } 
 	     	} );
 	    
 	  }).listen(3000);

