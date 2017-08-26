var http = require('http');

var handler = function(request, response) {
  console.log(`Serving request method: ${request.method} & request url: ${request.url}`);
};

var server = http.createServer(handler);
server.listen(3000, 'localhost');
console.log('Listening on http://localhost:3000');