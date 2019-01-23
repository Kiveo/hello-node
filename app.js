const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === '/') {
    res.write('<html>');
    res.write('<head><title>Root Message</title></head>');
    res.write('<body><h1>Submit Server Data</h1><form action="/message" method="POST"><input type="text" name="message" /><button type="submit">Send</button></form></body>')
    res.write('</html>');
    return res.end();
  }
  if (url === '/message' && method === 'POST') {
    const body = [];
    //req.on() fired when a new chunk is ready for reading
    req.on('data', (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });
    //once done parsing data, res.on(end)
    req.on('end', () => {
      //take the text data, add to body and convert toString
      const parsedBody = Buffer.concat(body).toString();
      console.log(parsedBody);
    })
    fs.writeFileSync('message.txt', 'Sample Text');
    res.statusCode = 302;
    res.setHeader('Location', '/');
    return res.end();
  }
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>Sample Server</title></head>');
  res.write('<body><h1>Hello, this is a sample page</h1></body>')
  res.write('</html>');
  res.end();
});
//can be seen via dev tools. Use network for server info and peak at title of page

server.listen(3000);

