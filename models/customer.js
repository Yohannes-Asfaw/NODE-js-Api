const mongoose = require('mongoose')

const customerschema = mongoose.Schema({
    name:String,
    phone:Number,
    isGold:Boolean
})
const Customer = mongoose.model('Customer',customerschema)



exports.customerschema=customerschema
exports.Customer=Customer