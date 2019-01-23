const http = require('http');

const server = http.createServer((req, res) => {
  const url = req.url;
  if (url === '/') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Root Message</title></head>');
    res.write('<body><h1>Submit Server Data</h1><form action="/message" method="POST"><input type="text" /><button type="submit">Send</button></form></body>')
    res.write('</html>');
    res.end();
  }
  
});
//can be seen via dev tools. Use network for server info and peak at title of page

server.listen(3000)