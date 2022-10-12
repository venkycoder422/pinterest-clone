const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    age: String,
    email: String,
    password :String,
    verifiedEmail: Boolean
},{
    timestamps: true
})

const User = mongoose.model('User' , userSchema)
module.exports = {User};