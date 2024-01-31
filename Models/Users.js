
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: true
    },
    email: {
        type: String,
        required: true
    },
    age: {
       type: Number,
        required: true
    },
    gender: String,
    location: {
        type: String,
        required: true
    }
});

const Users = mongoose.model('User', userSchema);

module.exports = Users;

