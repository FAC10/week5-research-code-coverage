const http = require('http');

const router = require('./router.js');

const port = 4000;

const server = http.createServer(router);
server.listen(port, function () {
  console.log('server is running on port:', port)
});
