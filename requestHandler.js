var db = require('./db');

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

var saveFormData = function(req, res) {
  var formData = req.body;

  if ('1' in formData) {
    saveToTable(db.Goal, formData, res);
  } else if ('I' in formData) {
    saveToTable(db.Journal, formData, res);
  }
};

var retrieveArchivedJournal = function(cb) {
  db.Journal.findAll()
    .then(function(journals) {
      var journalStr = JSON.stringify(journals);
      cb(journalStr);
    });
};

module.exports = {generateQuote: generateQuote, saveFormData: saveFormData, retrieveArchivedJournal: retrieveArchivedJournal};
