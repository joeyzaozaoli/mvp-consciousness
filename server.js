var express = require('express');
var parser = require('body-parser');

var handler = require('./requestHandler');

var app = express();
app.use(express.static(__dirname));
app.use(parser.json());
app.use(parser.urlencoded({extended: true}));

app.post('/', handler.saveJournal);

app.listen(3000, function() {
  console.log('Listening on http://localhost:3000');
});
