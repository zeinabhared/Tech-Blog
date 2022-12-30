const { User } = require('../models');

const userData = [
    {
        username: "zay_h",
        email: "zay@gmail.com",
        password: "password12345"
    },
    {
        username: "nichole_flowers",
        email: "nicholeflowers@gmail.com",
        password: "password12345"
    },
    {
        username: "kimberly_h",
        email: "kim@gmail.com",
        password: "password12345"
    },
    {
        username: "lisa_c",
        email: "lisa@gmail.com",
        password: "password12345"
    }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;