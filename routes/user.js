const express = require('express')
const user = require('../controller/userController')
const router = express.Router()


router.get('/testUrl', (req, res) => {
    res.json({
        "name": "saad"
    })
})
router.get('/', user.home)
router.get('/about',user.about)

module.exports = router