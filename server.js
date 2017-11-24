var express = require('express');
var bodyParser = require('body-parser');
var layouts = require('express-ejs-layouts');

var handler = require('./requestHandler');

var app = express();

/* * * * * * * * * * * * * * * * * * * * * * * * * * *
  Parser
* * * * * * * * * * * * * * * * * * * * * * * * * * */

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

/* * * * * * * * * * * * * * * * * * * * * * * * * * *
  View Engine
* * * * * * * * * * * * * * * * * * * * * * * * * * */

app.use(express.static(__dirname + '/assets'));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(layouts);

/* * * * * * * * * * * * * * * * * * * * * * * * * * *
  Router
* * * * * * * * * * * * * * * * * * * * * * * * * * */

app.get('/', function(req, res) {
  res.render('index');
});

app.get('/archive', function(req, res) {
  handler.retrieveArchivedJournal(function(journals) {
    res.render('archive', {journals: journals});
  });
});

app.get('/api/quote', handler.getRandomQuote);

app.get('/*', function(req, res) {
  res.sendStatus(404);
});

app.post('/', handler.saveFormData);

/* * * * * * * * * * * * * * * * * * * * * * * * * * *
  Server
* * * * * * * * * * * * * * * * * * * * * * * * * * */

app.listen(3000, function() {
  console.log('Listening on http://localhost:3000');
});
