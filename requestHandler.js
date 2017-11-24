var db = require('./db');

module.exports.getRandomQuote = function(req, res) {
  db.Quote.count()
    .then(function(count) {
      var id = Math.floor(count * Math.random()) + 1;
      db.Quote.findById(id)
        .then(function(quote) {
          res.json(quote);
        });
    });
};

var saveToTable = function(table, formData, res) {
  table.create(formData)
    .then(function(data) {
      res.redirect('/');
    })
    .catch(function(err) {
      if (table === db.Journal) {
        res.send('Please think of at least 5 things to be grateful for!');
      }
    });
};

module.exports.saveFormData = function(req, res) {
  var formData = req.body;

  if ('1' in formData) {
    saveToTable(db.Goal, formData, res);
  } else if ('I' in formData) {
    saveToTable(db.Journal, formData, res);
  }
};

module.exports.retrieveArchivedJournal = function(cb) {
  db.Journal.findAll()
    .then(function(journals) {
      cb(journals);
    });
};

