const mongoose = require('mongoose')
const {generSchema}=require('./gener')

const Movieschema = mongoose.Schema({
    title:String,
    gener:generSchema,
    numberinStock:Number,
    dailyRentalRate:Number
})

const Movie = mongoose.model('Movie',Movieschema)

exports.Movie=Movie
exports.Movieschema=Movieschema