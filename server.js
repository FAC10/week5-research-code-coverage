const http = require('http');
const hostname = process.env.HOSTNAME || 'localhost'; //process.env accesses environment variables in your project. when deployed on Heroku, you want it to switch over to the host name. You have to explicitly state a hostname, otherwise it will default to local host. When using something like heroku, you can change the host.
const port = process.env.PORT || 4000;

http.createServer(router).listen(port
  () => console.log(`Server running at port http://${hostname}:${port}`));
