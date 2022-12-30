const { Comment } = require('../models');

const commentData = [
    {
        user_id: 1,
        post_id: 2,
        comment: "This is amazing! Thank you for sharing!"
    },
    {
        user_id: 2,
        post_id: 1,
        comment: "Great post! Thank you so much!"
    },
    {
        user_id: 3,
        post_id: 4,
        comment: "Thanks for sharing such valuable information. Appreciate it!"
    },
    {
        user_id: 4,
        post_id: 3,
        comment: "Wow very insightful, thank you for this."
    },
]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;