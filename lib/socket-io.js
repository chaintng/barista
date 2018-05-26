const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const orderComplete = require('../handler/order-complete-handler');

io.on('connection', (socket) => {
  console.log('a user connected');

  socket.on('orderComplete', orderComplete);
});

http.listen(5001, () => {
  console.log('listening on *:5001');
});

module.exports = io;
