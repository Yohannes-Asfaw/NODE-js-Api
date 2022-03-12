const express = require('express')
const router = express.Router()
const {Customer} = require('../models/customer')


router.get('/',async (req,res)=>{
    const customers = await Customer.find()
    res.send(customers)

})

module.exports=router