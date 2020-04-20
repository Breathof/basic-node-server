const { io } = require('../server');
const { UserController } = require('../controllers/UserController');

let userController = new UserController();

io.on('connection', (client) => {
    client.on('chatJoin', (data, callback) => {
        console.log('DATA', data);
        if (!data.name) {
            return callback({
                error: true,
                msg: "Name or room is required"
            });
        }
        client.join(data.room);

        userController.addUser({ "id": client.id, "name": data.name, "room": data.room });
        let users = data.room ?
            userController.getRoomUsers(data.room) :
            userController.getUsers();


        // console.log(users);
        callback(users);
    });

    client.on('disconnect', () => {
        let deletedUser = userController.deleteUser(client.id)
        console.log(`User ${deletedUser.name} disconnected`)
    });

    client.on('sendMessage', (message) => {
        let user = userController.getUser(client.id);

        let msg = { 'user': user.name, 'message': message.message }
        client.broadcast.to(user.room).emit('sendMessage', msg);
    });

    client.on('sendPrivateMessage', (message) => {
        let user = userController.getUser(client.id);
        console.log('Trigger sendPrivateMessage', message)
        let msg = { 'user': user.name, 'message': message.message }
        client.broadcast.to(message.to).emit('sendMessage', msg);
    })
});

