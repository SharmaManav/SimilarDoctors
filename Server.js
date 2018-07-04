var express = require("express");
var app = express();
var router = express.Router();
var path = __dirname + '/views/';
var port = process.env.PORT || 8000;

router.use(function (req,res,next){
  console.log("/" + req.method);
  next();
});

router.get("/",function(req,res){
  res.sendFile(path + "index.html");
});

app.use("/",router);

app.list(port, function(){
	console.log('App running' + port);
});
