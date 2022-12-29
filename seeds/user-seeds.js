const { User } = require('../models');

const userData = [
    {
        username: "zay_h",
        twitter: "zay100",
        github: "zay_h",
        email: "zay@gmail.com",
        password: "password12345"
    },
    {
        username: "nichole_flowers",
        twitter: "nicholeflowers",
        github: "nicholef",
        email: "nicholeflowers@gmail.com",
        password: "password12345"
    },
    {
        username: "kimberly_h",
        twitter: "kimberlyh",
        github: "kim_h",
        email: "kim@gmail.com",
        password: "password12345"
    },
    {
        username: "lisa_c",
        twitter: "lisa100",
        github: "lisa_c",
        email: "lisa@gmail.com",
        password: "password12345"
    }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;