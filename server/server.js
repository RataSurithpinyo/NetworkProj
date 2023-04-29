
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const socketio = require('socket.io');

const app = express();
// const server = app.listen(process.env.PORT || 4000, () => {
//     console.log(`Server running on port ${server.address().port}`);
// });

//const io = socketio(server);

app.use(cors());
app.use(express.json());

// const authRoutes = require('./routes/auth');
// const groupRoutes = require('./routes/group');
// const messageRoutes = require('./routes/message');

// app.use('/api/auth', authRoutes);
// app.use('/api/group', groupRoutes);
// app.use('/api/message', messageRoutes);

// app.use((req, res) => {
//     res.status(404).send({ message: 'Not found' });
// });

// app.use((err, req, res, next) => {
//     console.log(err.stack);
//     res.status(500).send({ message: 'Internal server error' });
// });


const PORT = process.env.PORT || 4000;
mongoose.set("strictQuery", false);
mongoose
    .connect("mongodb+srv://network:networkpassword@networkproject.ppa2jja.mongodb.net/test")
    .then(() => {
    // listen for requests
        const server = app.listen(PORT, () => {
        console.log("connected to db & listening on port", PORT);
    });
        // const io = require("socket.io")(server, {
        //     pingTimeout: 60000,
        //     cors: {
        //     //origin: "http://localhost:3000",
        //     //origin : "https://sec33-group3-muse-connect-5kdwszn2t-pacharawin.vercel.app"
        //     origin : '*'
        //     },
        // });
        // io.on('connection', (socket) => {
        //     console.log(`Socket connected: ${socket.id}`);
            
        //     socket.on('disconnect', () => {
        //         console.log(`Socket disconnected: ${socket.id}`);
        //     });
        // });
    })