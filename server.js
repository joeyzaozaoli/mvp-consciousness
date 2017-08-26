var http = require('http');
var fs = require('fs');

var headers = {};

var requestHandler = function(request, response) {
  console.log(`Serving request method: ${request.method} & request url: ${request.url}`);

  if (request.method === 'GET') {
    if (request.url === '/') {
      fs.readFile(__dirname + '/index.html', function(error, data) {
        if (!error) {
          var html = data.toString();
          headers['Content-Type'] = 'text/html';
          response.writeHead(200, headers);
          response.end(html);
        }
      });
    }
  }
};

var server = http.createServer(requestHandler);
server.listen(3000, 'localhost');
console.log('Listening on http://localhost:3000');