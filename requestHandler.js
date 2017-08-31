var db = require('./db');

var saveJournal = function(req, res) {
  var journal = req.body;
  db.Journal.create(journal)
    .then(function(data) {
      res.redirect('/');
    })
    .catch(function(err) {
      res.send('Please think of at least 5 things to be grateful for!');
    });
};

var generateQuote = function(req, res) {
  db.Quote.count()
    .then(function(count) {
      var id = Math.floor(count * Math.random()) + 1;
      db.Quote.findById(id)
        .then(function(quote) {
          res.json(quote);
        });
    });
};

module.exports = {saveJournal: saveJournal, generateQuote: generateQuote};
