
const express = require('express');
const connectDB = require('./config/db');
const dotenv = require('dotenv');
const cors = require('cors');
const cookieParser = require('cookie-parser');
//const socketio = require('socket.io');

//Load env vars
dotenv.config({path:'./config/config.env'});

//Connect to database
connectDB();

const app = express();
// const server = app.listen(process.env.PORT || 4000, () => {
//     console.log(`Server running on port ${server.address().port}`);
// });

//const io = socketio(server);

app.use(cors());
app.use(express.json());
app.use(cookieParser());

//Mount routers
 const authRoutes = require('./routes/auth');
// const groupRoutes = require('./routes/group');
// const messageRoutes = require('./routes/message');

app.use('/api/auth', authRoutes);
// app.use('/api/group', groupRoutes);
// app.use('/api/message', messageRoutes);

// app.use((req, res) => {
//     res.status(404).send({ message: 'Not found' });
// });

// app.use((err, req, res, next) => {
//     console.log(err.stack);
//     res.status(500).send({ message: 'Internal server error' });
// });


const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, console.log('Server running in ', process.env.NODE_ENV, 'mode on port ', PORT));

//Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
    console.log(`Error: ${err.message}`);
    //Close server & exit process
    server.close(() => process.exit(1));
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