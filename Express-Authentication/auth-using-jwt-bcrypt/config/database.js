const mongoose = require('mongoose');

async function connectToMongoDb() {
    try {
        const connect = await mongoose.connect('mongodb://localhost:27017/jwt');
        console.log('Connected To MongoDB');
    } catch (error) {
        console.log('Error connecting ', error)
    }

};

module.exports = connectToMongoDb;