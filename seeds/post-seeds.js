const { Post } = require('../models');

const postData = [
    {
        title: "Welcome to Tech Blog!",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        user_id: 1
    },
    {
        title: "New Tech Tools Available Now!",
        content: "Dictum at tempor commodo ullamcorper a lacus. Quam pellentesque nec nam aliquam sem et. Proin sed libero enim sed faucibus.",
        user_id: 2
    },
    {
        title: "Daily Life of a Full Stack Engineer!",
        content: "Morbi enim nunc faucibus a pellentesque. Non curabitur gravida arcu ac tortor dignissim convallis aenean et.",
        user_id: 3

    },
    {
        title: "How much coding is too much?",
        content: "Vitae sapien pellentesque habitant morbi tristique senectus et. Fringilla ut morbi tincidunt augue interdum velit euismod in pellentesque. Congue mauris rhoncus aenean vel elit scelerisque.",
        user_id: 4
    }
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;