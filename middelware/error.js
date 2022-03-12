const winston = require('winston')

module.exports =function(err,req,res,next){
    // log the exeption on the database
    winston.error(err.message,{metadata: err.stack})
    res.status(500).send('something failed')
}


