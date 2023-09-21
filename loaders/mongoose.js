const mongoose = require('mongoose');

module.exports = async function () {

    const localURL = 'mongodb://localhost:27017/authexercies';
    const compass = 'mongodb+srv://admin:admin@cluster0.xtxynlb.mongodb.net/';
    const connection = await mongoose.connect(localURL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    return connection.connection.db;
};
