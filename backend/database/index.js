const mongoose = require('mongoose')
async function connectDB() {
    try {
        const url = 'mongodb://0.0.0.0:27017/pinterestClone'
        mongoose.connect(url)
        console.log('connected successfully');
    } catch (error) {
        console.log('connection not done');
    }
}
module.exports = connectDB;