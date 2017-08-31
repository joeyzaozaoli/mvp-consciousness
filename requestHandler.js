var saveJournal = function(req, res) {
  console.log(req.body);
  res.redirect('/');
};

module.exports = {saveJournal: saveJournal};
