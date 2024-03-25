require('dotenv').config()
const express = require('express')
const UserRoutes = require('./routes/user')
const authRoutes = require('./routes/auth')
const app = express()
const port = process.env.PORT

app.use('', UserRoutes, authRoutes)

app.listen(port, () => {
    console.log(`Server listeniing on http://localhost:${port}`)
})

