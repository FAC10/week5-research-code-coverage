const fs = require('fs');
const path = require('path');
const url = require('url');

const handler = {}; 

handler.serveLanding = (request, response) => {
  fs.readFile(path.join(__dirname, '..', 'public','index.html'), (err,file) =>{
    if(err) console.log(err);
    response.writeHead(200, {
      'content-type': 'text/html'
    });
    response.end(file);
  });
};

module.exports = handler;
