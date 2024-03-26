const express = require('express')
const user = require('../controller/userController')
const UserRoutes = express.Router()


UserRoutes.get('/testUrl', (req, res) => {
    res.json({
        "name": "saad"
    })
})
UserRoutes.get('/home', user.home)
UserRoutes.get('/about', user.about)

module.exports = UserRoutes