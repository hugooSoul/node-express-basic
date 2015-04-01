var express = require('express');
var app = express();

app.set('views', './views');
app.set('view engine', 'jade');

//var utilities = require('./utilities');
app.get('/', function(req, res){
	res.render('index', {
		title: "hugooSoul"
	});
});

app.listen(3000);
console.log('Server listing ar 127.0.0.1:3000');