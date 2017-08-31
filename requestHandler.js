var db = require('./db');

var saveJournal = function(req, res) {
  var journal = req.body;
  db.Journal.create(journal)
    .then(function(data) {
      res.redirect('/');
    })
    .catch(function(err) {
      console.log('fail!');
      res.send('Rewrite it!');
    });
};

module.exports = {saveJournal: saveJournal};
