var express=require('express');
var app=express();
app.use(express.static('public'));
var hbs=require('express3-handlebars');
app.engine('hbs',hbs({
	extname:'hbs',defaultLayout:'main',layoutDir:__dirname+'/views/layouts'

}));
const bodyparser = require('body-parser');
app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json())
app.set('view engine','hbs');
var cookieParser = require('cookie-parser');
 app.use(cookieParser('secret'));
 var session=require('express-session');
 app.use(session());


    app.get('/login' , function( req , res ) {
        if(req.session.user){
          res.render('home',{userName:req.session.user});
        }
        else{
          res.render('login');
        }

      });
    app.post('/home',function(req,res){
      if(req.body.userName){
            req.session.user=req.body.userName;
            res.render('home',{userName:req.session.user})
      }
      else{
        res.render('login');
      }
    })
    app.get('/logout',function(req,res){

      if(req.session.user){
        delete req.session.user;
      }
      res.render('login');
    })

app.listen(9005);
