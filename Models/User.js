const mongoose = require("mongoose")

const UserScheme = mongoose.Schema({
    Email: String,
    Password: String
})

module.exports = mongoose.model('Users', UserScheme)