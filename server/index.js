const express = require('express');
const http = require('http');
const apiRouter = require('../routes/api/index');
const cors = require('cors');
const socketIo = require('socket.io');

const app = express();

app.use(
  cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
  }),
);

// Routes
app.use('/api', apiRouter);

const httpServer = http.createServer(app);

httpServer.listen(5123, () => {
  console.log('HTTP Server running on port 5123');
});

global.io = socketIo(httpServer);

io.on('connect', function (socket) {
  console.log('connected');
});
