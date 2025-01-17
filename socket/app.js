import { Server } from 'socket.io';
import dotenv from 'dotenv';
import http from 'http';

dotenv.config();
const port = process.env.PORT || 8000;
const server = http.createServer();
const io = new Server(server, {
  cors: {
    origin: process.env.CLIENT_URL,
  },
});

let onlineUser = [];

const addUser = (userId, socketId) => {
  const userExist = onlineUser.find((user) => user.userId === userId);
  if (!userExist) {
    onlineUser.push({ userId, socketId });
  }
};

const removeUser = (socketId) => {
  onlineUser = onlineUser.filter((user) => user.socketId !== socketId);
};

const getUser = (userId) => {
  return onlineUser.find((user) => user.userId === userId);
};

io.on('connection', (socket) => {
  console.log('A user connected');

  socket.on('newUser', (userId) => {
    addUser(userId, socket.id);
    console.log(`User ${userId} connected with socket ID ${socket.id}`);
  });

  socket.on('sendMessage', ({ receiverId, data }) => {
    const receiver = getUser(receiverId);
    if (receiver && receiver.socketId) {
      io.to(receiver.socketId).emit('getMessage', data);
    } else {
      console.error(`User with ID ${receiverId} not found or not connected`);
    }
  });

  socket.on('disconnect', () => {
    removeUser(socket.id);
    console.log(`User with socket ID ${socket.id} disconnected`);
  });
});

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
