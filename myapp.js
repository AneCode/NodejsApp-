var http=require('http');
var express=require('express');
var app=express();
app.get( '/' , function( req , res )
 {
   res.sendFile(__dirname + '/public' + '/index.html' );
 } );
  app.get( '/index' , function( req , res ) 
  	{
  	 res.sendFile(__dirname + '/public' + '/index.html' );
  	  }); 
  app.get( '/car.jpg' , function( req , res )
   {
    res.sendFile(__dirname + '/public' + '/car.jpg' );
    });
  app.get( '/style.css' , function( req , res )
   {
    res.sendFile(__dirname + '/public' + '/style.css' );
    });
app.listen(9002);
