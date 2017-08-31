window.onload = function() {

  // Dynamically create a journal table

  var createEntryNode = function(num) {
    var templateNode = document.createElement('tr');
    var templateStr = `
        <td>${num}.</td>
        <td><input type='text' name='${num}' size='100'></td>`;
    templateNode.innerHTML = templateStr;
    return templateNode;
  };

  var journalNode = document.getElementsByClassName('journal')[0];
  var nums = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII'];
  journalNode.textContent = '';
  nums.forEach(function(num) {
    var templateNode = createEntryNode(num);
    journalNode.appendChild(templateNode);
  });

  // Randomly generate a quote

  var generateQuote = function() {
    $.ajax({
      url: 'http://localhost:3000/quote',
      type: 'GET',
      success: function(data) {
        var quoteNode = document.getElementsByClassName('quote')[0];
        quoteNode.textContent = `${data.quote} ~ ${data.author}`;
      },
      error: function(err) {
        console.log('Error getting the quote!');
      }
    });
  };

  generateQuote();
  setInterval(generateQuote, 10000);

};