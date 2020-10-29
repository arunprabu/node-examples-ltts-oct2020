var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http); // socket.io server is being setup

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
  // server side console
  console.log('a user connected');
  socket.on('chat_message', (msg) => {
    console.log('message: ' + msg);
    io.emit('broadcast_message', msg);
  });

  // if the socket client disconnects
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

http.listen(3000, () => {
  console.log('listening on *:3000');
});