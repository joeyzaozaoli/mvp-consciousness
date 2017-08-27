var fs = require('fs');
var queryString = require('query-string');

var headers = {};

var servePage = function(pagePath, response) {
  fs.readFile(pagePath, function(error, data) {
    if (!error) {
      var html = data.toString();
      headers['Content-Type'] = 'text/html';
      response.writeHead(200, headers);
      response.end(html);
    }
  });
};

var gatherData = function(request, cb) {
  var dataStream = '';
  request.on('data', function(chunk) {
    dataStream += chunk.toString();
  });
  request.on('end', function() {
    var dataObj = queryString.parse(dataStream);
    cb(dataObj);
  });
};

module.exports = {servePage: servePage, gatherData: gatherData};