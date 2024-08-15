const jsonServer = require('json-server');
const { authenticateUser, authenticateMiddleware } = require('./authenticate');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(jsonServer.bodyParser);

// Login Route
server.post('/login', (req, res) => {
  const { email, password } = req.body;
  try {
    const { token } = authenticateUser(email, password);
    res.status(200).json({ token });
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
});

// Authentication middleware
server.use(authenticateMiddleware);

server.use(router);
server.listen(3000, () => {
  console.log('JSON Server is running on port 3000');
});
