var express=require('express');
var app=express();
app.use(express.static('public'));
const bodyparser = require('body-parser');
app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json())
app.get('/form',function (require,response) {
	response.sendFile(__dirname + '/public' +'/index.html');
})
var colors=['green','blue','red','orange']
app.post('/process',function (req,res) {
    var index=req.body.num;
    console.log(index);
    // var index=1;
    res.json({color:colors[(index+1)%4]});	
})
app.listen(9002);

