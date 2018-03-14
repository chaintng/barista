const app = require('express')()
const http = require('http').Server(app);
const io = require('socket.io')(http);
const orderComplete = require('./order-complete-handler');

io.on('connection', function(socket){
  console.log('a user connected');

  socket.on('orderComplete', orderComplete);
});

http.listen(5001, function(){
  console.log('listening on *:5001');
});

module.exports = io;