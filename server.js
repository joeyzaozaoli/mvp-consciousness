var http = require('http');

var requestHandler = require('./requestHandler');

var server = http.createServer(requestHandler);
server.listen(3000, 'localhost');
console.log('Listening on http://localhost:3000');
