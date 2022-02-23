const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);


app.get('/', (req, res) => {
    res.sendFile('C:/Users/mo5/Documents/WeatherDisplayProject_3/index.html');  
        
});

io.on('connection', (socket) => {
    console.log('a user connected');
 /*   socket.on('disconnect', () => {
        console.log('user disconnected');
      }); */
}); 


server.listen(3000, () => {
    console.log('listening on *:3000');
}); 
/*'use strict';
var http = require('http');
var port = process.env.PORT || 1337;

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World\n');
}).listen(port); 


 */
