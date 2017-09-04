window.onload = function() {

  // Randomly generate a quote

  var quoteNode = document.getElementsByClassName('quote')[0];
  var authorNode = document.getElementsByClassName('author')[0];
  generateQuote(quoteNode, authorNode);
  setInterval(function() {
    generateQuote(quoteNode, authorNode);
  }, 45000);

  // Dynamically create a goals table

  var goalsNode = document.getElementsByClassName('goals')[0];
  var arabicNums = [1, 2, 3, 4, 5, 6];
  goalsNode.textContent = '';
  arabicNums.forEach(function(num) {
    var templateNode = createGoalNode(num);
    goalsNode.appendChild(templateNode);
  });

  // Dynamically create a journal table

  var journalNode = document.getElementsByClassName('journal')[0];
  var romanNums = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII'];
  journalNode.textContent = '';
  romanNums.forEach(function(num) {
    var templateNode = createJournalNode(num);
    journalNode.appendChild(templateNode);
  });

  // Persist form data after form is submitted

  var goalsFormNode = document.getElementsByClassName('form')[0];
  var journalFormNode = document.getElementsByClassName('form')[1];
  persistFormData(goalsFormNode, arabicNums);
  persistFormData(journalFormNode, romanNums);

};