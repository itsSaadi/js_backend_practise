require('dotenv').config()
const express = require('express')
const UserRoutes = require('./routes/user')
const AuthRoutes = require('./routes/auth')
const app = express()
const port = process.env.PORT || 3000

app.use('/auth', AuthRoutes)
app.use('/user', UserRoutes)

app.listen(port, () => {
    console.log(`Server listeniing on http://localhost:${port}`)
})

