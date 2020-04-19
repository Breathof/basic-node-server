const path = require('path');
const socketio = require('socket.io')
const http = require('http');

const express = require('express');
const app = express();
let server = http.createServer(app);

const publicPath = path.resolve(__dirname, '../public');
app.use(express.static(publicPath));
const port = process.env.PORT || 3000;
module.exports.io = socketio(server);
require('./socket/socket');

server.listen(port, err => {
    if (err) throw new Error(err)
    console.log(`Server started at port ${port}`)
});
