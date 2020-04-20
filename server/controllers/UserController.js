require('../models/User');

class UserController {
    constructor() {
        this.users = [];

    }

    addUser(user) { this.users.push(user); }
    getUser(id) { return this.users.find(x => x.id == id); }
    getUsers() { return this.users; }
    getRoomUsers(room) { return this.users.filter(x => x.room === room); }
    deleteUser(id) {
        let deletedUser = this.getUser(id);
        this.users = this.users.filter(x => x.id != id);
        return deletedUser;
    }
}

module.exports = {
    UserController
}