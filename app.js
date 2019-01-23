const http = require('http');

const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);
  // process.exit()
  res.setHeader('Content-Type', 'text/html');
  res.write('<html><head><title>Sample Server</title></html>');
  res.end();
});
//can be seen via dev tools. Use network for server info and peak at title of page

server.listen(3000)