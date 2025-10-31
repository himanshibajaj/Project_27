const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// When a user connects
io.on('connection', (socket) => {
  console.log('🟢 User connected');

  // Receive message from client
  socket.on('chat message', (msg) => {
    console.log('💬 Message:', msg);

    // Send message to all users
    io.emit('chat message', msg);
  });

  socket.on('disconnect', () => {
    console.log('🔴 User disconnected');
  });
});

server.listen(4000, () => {
  console.log('✅ Server running on http://localhost:4000');
});

//npm init -y
//npm install express socket.io
//node server.js