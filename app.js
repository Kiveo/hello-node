const http = require('http');

const routes = require('./routes');

const server = http.createServer(routes); //routes.hanlder if exported as multiple

server.listen(3000);