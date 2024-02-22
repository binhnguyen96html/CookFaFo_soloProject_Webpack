const bcrypt = require('bcryptjs');

const user = [
    {
        name: 'Admin User',
        email: 'admin@gmail.com',
        password: bcrypt.hashSync('123',10),
        isAdmin: true,
    },
    {
        name: 'Thanh Nguyen',
        email: 'thanh@gmail.com',
        password: bcrypt.hashSync('123',10),
        isAdmin: false,
    },
]

module.exports = user;