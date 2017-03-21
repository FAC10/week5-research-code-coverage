const router = (req, res) => {
  if (req.url === '/' && req.method === 'GET'){
    res.writeHead(200, {'Content-Type' : 'text/html'})
    res.end('Hello');
  } else if (req.url === '/blog') {
      if (req.method === 'GET') {

        res.writeHead(200, {'Content-Type' : 'application/json'})
        const responseObj = {'0':['string', 'string', 'string']};
        res.end(JSON.stringify(responseObj));

      } else if (req.headers.password === 'potato'){

        res.writeHead(200, {'Content-type' : 'application/json' });
        let body = '';
        req.on('data', (chunk) => {
          body += chunk;
        });
        req.on('end', () => {
          res.end(body);
        });

      }
  } else {
    res.writeHead(404, {'Content-Type' : 'text/html'})


    res.end('unknown url');
  }
}

module.exports = router;
