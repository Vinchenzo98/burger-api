const theServer = require('json-server');
const server = theServer.create();
const router = theServer.router('db.json');
const middlewares = theServer.defaults();
const port = process.env.PORT || 3000;

server.use(middlewares);
server.use(router);
server.listen(port);
