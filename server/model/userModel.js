const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        // required: true,
        unique: true
    },
    email: {
        type: String,
        required: true
    },
    picture: {
        type: String
    },
    pw: {
        type: String
    }
})

module.exports = mongoose.model('user', userSchema)