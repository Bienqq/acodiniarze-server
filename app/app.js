const express = require('express')
const router = require('./api/router')
const morgan = require('morgan')
const app = express()

// some logging
app.use(morgan('dev'))

app.use(express.json())

app.use('/api', router)

// handle 404 error
app.use(((req, res, next) => {
    next({message: `Route ${req.path} not found`, status: 404})
}))

// handle other errors
app.use((error, req, res, next) => {
    console.error(error)
    const status = error.status || 500
    const message = error.message || "Internal Server Error"
    res.status(status).send({status, message})
})

module.exports = app