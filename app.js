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

var port = process.env.PORT || 3000;

app.listen(port);
console.log('Server listing ar 3000:' + port);