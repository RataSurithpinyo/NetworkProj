const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const http = require('http');
const { Server } = require('socket.io');
// //const harperSaveMessage = require('./services/harper-save-message');
// //const harperGetMessages = require('./services/harper-get-messages');
const leaveRoom = require('./utils/leave-room');

//Load env vars
dotenv.config({path:'./config/config.env'});

const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());

//Mount routers
const authRoutes = require('./routes/auth');
// const chatRoutes = require("./routes/chat");
const roomRoutes = require('./routes/room');

app.use('/api/auth', authRoutes);
// app.use('/api/chat', chatRoutes);
app.use('/api/room', roomRoutes);

// app.use((req, res) => {
//     res.status(404).send({ message: 'Not found' });
// });

// app.use((err, req, res, next) => {
//     console.log(err.stack);
//     res.status(500).send({ message: 'Internal server error' });
// });

const PORT = process.env.PORT || 4000;
mongoose.set('strictQuery', false);
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    // listen for requests
    const server = app.listen(PORT, () => {
      console.log("connected to db & listening on port", PORT);
    });
    const socketIO = require("socket.io")(server, {
      pingTimeout: 60000,
      cors: {
        origin: "http://localhost:3000",
      },
    });

const CHAT_BOT = 'ChatBot';
let chatRoom = ''; // E.g. javascript, node,...
let users = []; // All users in current chat room

// Listen for when the client connects via socket.io-client
socketIO.on('connection', (socket) => {
  console.log(`⚡: ${socket.id} user just connected!`)  
  socket.on("message", data => {
    socketIO.emit("messageResponse", data)
  })

  socket.on("typing", data => (
    socket.broadcast.emit("typingResponse", data)
  ))

  socket.on("newUser", data => {
    console.log("new user in server.js")
    users.push(data)
    //console.log(users)
    socketIO.emit("newUserResponse", users)
  })
  console.log(users)
  
  socket.on('disconnect', () => {
    console.log('🔥: A user disconnected');
    users = users.filter(user => user.socketID !== socket.id)
    socketIO.emit("newUserResponse", users)
    socket.disconnect()
  });
});
}).catch((error) => {
  console.log(error);
});