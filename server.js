var express = require('express');
var bodyParser = require('body-parser');
var layouts = require('express-ejs-layouts');

var database = require('./db');
var handler = require('./requestHandler');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/assets'));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(layouts);

app.get('/', function(req, res) {
  res.render('index');
});

app.get('/archive', function(req, res) {
  handler.retrieveArchivedJournal(function(journalStr) {
    res.render('archive', {journals: journalStr});
  });
});

app.post('/', handler.saveFormData);

// API
app.get('/quote', handler.generateQuote);

app.listen(3000, function() {
  console.log('Listening on http://localhost:3000');
});
