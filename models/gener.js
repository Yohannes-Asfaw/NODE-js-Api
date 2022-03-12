const mongoose = require('mongoose')

const generSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    }
})


const Gener = mongoose.model('Gener',generSchema)

exports.Gener=Gener
exports.generSchema=generSchema