const { User, Task } = require('../database/schema')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const crypto = require('crypto')

const SECRET_KEY = 'akhdy123wedje12hwy'


// Regitser User
async function registerUser(req, res) {
    let { name, email, password } = req.body;
    const user = await User.findOne({ email, })
    if (user) {
        return res.send({
            response: 'error',
            message: 'User Registed Already'
        })
    } else {
        password = bcrypt.hashSync(password, 10)
        await User.create({
            name,
            email,
            password,
            verifyEmailOtp: crypto.randomInt(1000, 9999),
            verifiedEmail: false
        })
        return res.send({
            response: 'success',
            message: 'User Registed Successfully'
        })
    }
}

// Login User
async function login(req, res) {
    const { email, password } = req.body;
    console.log(email, password)
    const userFound = await User.findOne({
        email,
    })
    if (!userFound) {
        res.status(400).send({
            response: 'error',
            message: 'email not found'
        })
    } else {
        console.log(password, userFound.password)
        let matched = bcrypt.compareSync(password, userFound.password)
        if (matched) {
            let { name, email, verifiedEmail } = userFound
            const token = jwt.sign({ name, email, verifiedEmail }, SECRET_KEY)
            res.send({
                response: 'success',
                message: 'successfully loged in',
                token,
                user: {
                    name,
                    email,
                    verifiedEmail
                }
            })
        } else {
            res.status(400).send({
                response: 'error',
                message: 'Invalid Password'
            })
        }
    }
}

module.exports = {
    registerUser,
    login
}