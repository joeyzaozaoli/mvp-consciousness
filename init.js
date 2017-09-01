window.onload = function() {

  // Dynamically create a journal table

  var createEntryNode = function(num) {
    var templateNode = document.createElement('tr');
    var templateStr = `
        <td>${num}.</td>
        <td><input type='text' id='${num}' name='${num}' size='100'></td>`;
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

  // Persist form data after form is submitted

  var formNode = document.getElementsByClassName('form')[0];
  formNode.addEventListener('submit', function() {
    nums.forEach(function(num) {
      var inputNode = document.getElementById(num);
      var inputValue = inputNode.value;
      localStorage.setItem(num, inputValue);
    });
  });

  nums.forEach(function(num) {
    var inputNode = document.getElementById(num);
    var inputValue = localStorage.getItem(num);
    if (inputValue !== null) { inputNode.value = inputValue; }
  });

  // Randomly generate a quote

  var generateQuote = function() {
    $.ajax({
      url: 'http://localhost:3000/quote',
      type: 'GET',
      success: function(data) {
        var quoteNode = document.getElementsByClassName('quote')[0];
        quoteNode.textContent = `${data.quote}`;
        var authorNode = document.getElementsByClassName('author')[0];
        authorNode.textContent = `~ ${data.author}`;
      },
      error: function(err) {
        console.log('Error getting the quote!');
      }
    });
  };

  generateQuote();
  setInterval(generateQuote, 45000);

};