require('dotenv').config()
const express = require('express')
const router = require('./routes/user')
const app = express()
const port = process.env.PORT

app.use('', router)

app.listen(port, () => {
    console.log(`Server listeniing on port ${port}`)
})

