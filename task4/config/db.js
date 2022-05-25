const mongoose = require('mongoose');

const uri = process.env.MONGO_URI || 'mongodb://localhost:27017/task4'

mongoose.connect(uri)
    .then(() => console.log("Mongodb connection estrablished"))
    .catch(err => console.log(err))

module.exports = mongoose.connection;