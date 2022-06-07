const dotenv = require('dotenv').config()
const express = require('express')
const app = express()

// environment variable init
const app_name = process.env.APP_NAME
const server_port = process.env.SERVER_PORT

// Request body init
app.use(express.json())
app.use(express.urlencoded({ extended : false }))

// Student route use
app.use('/api/students', require('./routes/student'))

// Express server listener with port
app.listen(server_port, () => {
    console.log(`Our ${ app_name } is running on port ${ server_port }`)
})