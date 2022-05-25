const mongoose = require('mongoose');
const user = require('./user');
const Schema = mongoose.Schema;

const stationSchema = new Schema({
    user: {
        type: Schema.Types.objectId,
        ref: "User",
    },
    name: {
        type:String,
        require: true,
    },
    stat: {
        type:String,
        require: true,
    }
})


module.exports = mongoose.module('Station', stationSchema);