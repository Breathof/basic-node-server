var socket = io();
socket.on('connect', function () {
    console.log('Connected to the server')
});
socket.on('disconnect', function () {
    console.log('Disconnected to the server')
});
socket.on('send_message', function (message) {
    console.log(message)
});

socket.emit('send_message', {
    name: 'Clovis',
    data: {
        info: [1, 2, 3, 4]
    }
}, function () {
    console.log('Callback')
})