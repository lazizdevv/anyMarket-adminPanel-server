// api/json-server.js
import jsonServer from 'json-server';
import fs from 'fs';
import path from 'path';

const server = jsonServer.create();
const router = jsonServer.router(path.resolve('.', 'db.json'));
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

server.listen(process.env.PORT || 3000, () => {
  console.log('JSON Server is running');
});
