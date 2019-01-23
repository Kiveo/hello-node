const http = require('http');

const server = http.createServer((req, res) => {
  const url = req.url;
  if (url === '/') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Node App</title>');
    res.write('</html>');
    res.end();
  }
  
});
//can be seen via dev tools. Use network for server info and peak at title of page

server.listen(3000)