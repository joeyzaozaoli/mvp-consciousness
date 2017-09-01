var express = require('express');
var parser = require('body-parser');

var database = require('./db');
var handler = require('./requestHandler');

var app = express();
app.use(express.static(__dirname));
app.use(parser.json());
app.use(parser.urlencoded({extended: true}));

app.get('/quote', handler.generateQuote);
app.post('/', handler.saveFormData);

app.listen(3000, function() {
  console.log('Listening on http://localhost:3000');
});
