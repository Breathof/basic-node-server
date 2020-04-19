const { io } = require('../server');

io.on('connection', (client) => {
    console.log('User connected');

    client.on('disconnect', () => {
        console.log('User disconnected');
    });

    client.on('send_message', (message, callback) => {
        // console.log(message);
        // callback();
        client.broadcast.emit('send_message', message)
    });

    // client.emit('send_message', {
    //     name: 'Sample object',
    //     data: {
    //         info: [1, 2, 3, 4]
    //     }
    // });
});

