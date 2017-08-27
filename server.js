var http = require('http');
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

var requestHandler = function(request, response) {
  console.log(`Serving request method: ${request.method} & request url: ${request.url}`);

  if (request.method === 'GET') {
    if (request.url === '/') {
      servePage(__dirname + '/index.html', response);

    } else if (request.url === '/home') {
      servePage(__dirname + '/home.html', response);
    }
  }

  if (request.method === 'POST') {
    if (request.url === '/home') {
      gatherData(request, function(dataObj) {
        // save dataObj
        response.writeHead(302, {Location: '/home'});
        response.end();
      });
    }
  }
};

var server = http.createServer(requestHandler);
server.listen(3000, 'localhost');
console.log('Listening on http://localhost:3000');
