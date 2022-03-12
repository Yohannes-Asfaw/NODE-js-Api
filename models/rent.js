const mongoose = require('mongoose')
const {customerschema} = require('./customer')
const{Movieschema}=require('./movie')


const rentalschema = mongoose.Schema({
    customer : customerschema,
    movie:Movieschema

})

const Rental = mongoose.model('Rental',rentalschema)

exports.Rental=Rental
exports.rentalschema=rentalschema