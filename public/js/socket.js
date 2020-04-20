var socket = io();

var params = new URLSearchParams(window.location.search);

if (!params.has('name')) {
    window.location = 'index.html';
    throw new Error('Name is required');
}

var user = { name: params.get('name') };

socket.on('connect', function () {
    console.log('Connected to the server')
    socket.emit('chatJoin', user, (response) => {
        console.log(response);
    })
});


socket.on('disconnect', function () {
    console.log('Disconnected to the server')
});


socket.on('sendMessage', function (message) {
    console.log("Trigger", message);
});
