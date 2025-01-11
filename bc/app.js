// import express from 'express';
// import cors from 'cors';
// import cookieParser from 'cookie-parser';
// import morgan from 'morgan';
// import dotenv from 'dotenv';
// import { Server, Socket } from 'socket.io';
// import { UserManager } from "./manager/UserManger.js";
// import http from 'http'


// dotenv.config({ path: './.env' });

// export const envMode = process.env.NODE_ENV?.trim() || 'DEVELOPMENT';
// const port = process.env.PORT || 3000;

// const app = express();

// app.use(express.json({ limit: "16kb" }));
// app.use(express.urlencoded({ extended: true, limit: "16kb" }));
// app.use(express.static("public"));
// app.use(cors({ origin: '*', credentials: true }));
// app.use(cookieParser());
// app.use(morgan('dev'));

// app.get('/', (req, res) => {
//   res.send('Hello, World!');
// });

// // your routes here

// app.get('*', (req, res) => {
//   res.status(404).json({
//     success: false,
//     message: 'Page not found',
//   });
// });

// const server = http.createServer(http);

// const io = new Server(server, {
//   cors: {
//     origin: "http://localhost:5173"
//   }
// });

// const userManager = new UserManager();

// io.on('connection', (socket) => {
//   console.log('a user connected');
//   userManager.addUser("randomName", socket);
//   socket.on("disconnect", () => {
//     console.log("user disconnected");
//     userManager.removeUser(socket.id);
//   })
// });

// server.listen(3000, () => {
//     console.log('listening on *:3000');
// });
import http from "http";

import express from 'express';
import { Server } from 'socket.io';
import { UserManager } from './manager/UserManger.js';

const app = express();
const server = http.createServer(http);

const io = new Server(server, {
  cors: {
    origin: "https://expenzo-fr.vercel.app/"
  }
});
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

const userManager = new UserManager();

io.on('connection', (socket) => {
  console.log('a user connected');
  userManager.addUser("randomName", socket);
  socket.on("disconnect", () => {
    console.log("user disconnected");
    userManager.removeUser(socket.id);
  })
});

server.listen(3000, () => {
    console.log('listening on *:3000');
});