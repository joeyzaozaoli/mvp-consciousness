var helper = require('./helper');

var requestHandler = function(request, response) {
  console.log(`Serving request method: ${request.method} & request url: ${request.url}`);

  if (request.method === 'GET') {
    if (request.url === '/') {
      helper.servePage(__dirname + '/index.html', response);

    } else if (request.url === '/home') {
      helper.servePage(__dirname + '/home.html', response);
    }
  }

  if (request.method === 'POST') {
    if (request.url === '/home') {
      helper.gatherData(request, function(dataObj) {
        // save dataObj
        response.writeHead(302, {Location: '/home'});
        response.end();
      });
    }
  }
};

module.exports = requestHandler;