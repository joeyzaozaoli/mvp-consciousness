var http = require('http');
var fs = require('fs');

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

var requestHandler = function(request, response) {
  console.log(`Serving request method: ${request.method} & request url: ${request.url}`);

  if (request.method === 'GET') {
    if (request.url === '/') {
      servePage(__dirname + '/index.html', response);

    } else if (request.url === '/home') {
      servePage(__dirname + '/home.html', response);
    }
  }
};

var server = http.createServer(requestHandler);
server.listen(3000, 'localhost');
console.log('Listening on http://localhost:3000');