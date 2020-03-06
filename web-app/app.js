var express = require("express");
var app = express();

app.set("view engine","ejs");
app.use(express.static(__dirname + "/public"));

app.get("/",function(req,res){
	res.render("index");
});

app.get("/tic-tac-toe",function(req,res){
	res.render("ttt");
});

app.get("/2048",function(req,res){
	res.render("2048");
});

app.listen(process.env.PORT || 3000, process.env.IP);