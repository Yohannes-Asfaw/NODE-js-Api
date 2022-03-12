const express = require('express')
const rent = require('../routes/rents')
const movie = require('../routes/movies')
const customer = require('../routes/customers')
const regestration = require('../routes/registration')
const login = require('../routes/login')
const gener = require('../routes/geners')
const error = require('../middelware/error')


module.exports=function(app){
    app.use(express.json())
    app.use('/api/gener',gener)
    app.use('/api/rent',rent)
    app.use('/api/movie',movie)
    app.use('/api/customers',customer)
    app.use('/api/reg',regestration)
    app.use('/api/login',login)
    app.use(error)
}