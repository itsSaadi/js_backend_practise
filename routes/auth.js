const express = require('express')
const authRoutes = express.Router()

authRoutes.get('/login', (req, res) => {
    res.send('User Logged in')
})
authRoutes.get('/signup', (req, res) => {
    res.send('User sigend up')
})

module.exports = authRoutes;