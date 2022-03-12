const winston = require('winston')
const logger =require('./logging')
const mongoose = require('mongoose')
module.exports=function(){
    mongoose.connect('mongodb://localhost/vidly')
    .then(()=>logger.info('connected to mongodb'))
}