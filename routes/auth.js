const express = require('express')
const AuthRoutes = express.Router()

AuthRoutes.get('/auth/login', (req, res) => {
    res.send('User Logged in')
})
AuthRoutes.get('/signup', (req, res) => {
    res.send('User sigend in')
})

module.exports = AuthRoutes;