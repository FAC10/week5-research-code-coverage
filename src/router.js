const handler = require ('./handler.js');

function router (request, response) {
  const url = request.url;

  if (url === '/') {
    handler.serveLanding(request, response);
  }
}

module.exports = router;
