const mongoose = require('mongoose');

async function connectToMongo() {
    mongoose.connect('mongodb://localhost:27017/basic-auth')
        .then(() => console.log('Connected to MongoDB'))
        .catch(err => console.error('Error connecting to MongoDB:', err));
}

module.exports = connectToMongo