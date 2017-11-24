// Randomly generate a quote

var getRandomQuote = function(quoteNode, authorNode) {
  $.ajax({
    url: '/api/quote',
    type: 'GET',
    success: function(data) {
      quoteNode.textContent = `${data.quote}`;
      authorNode.textContent = `~ ${data.author}`;
    },
    error: function(err) {
      console.log('Error getting the quote!');
    }
  });
};

// Dynamically create a goals table

var createGoalNode = function(num) {
  var tempNode = document.createElement('div');
  var templateStr = `<textarea id='${num}' class='goal-entry' name='${num}'></textarea>`;
  tempNode.innerHTML = templateStr;
  var templateNode = tempNode.childNodes[0];
  return templateNode;
};

// Dynamically create a journal table

var createJournalNode = function(num) {
  var templateNode = document.createElement('tr');
  var templateStr = `
      <td class='journal-entry-number'>${num}.</td>
      <td><input type='text' id='${num}' class='journal-entry' name='${num}'></td>`;
  templateNode.innerHTML = templateStr;
  return templateNode;
};

// Persist form data after form is submitted

var persistFormData = function(formNode, nums) {

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

};
