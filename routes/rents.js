const mongoose = require('mongoose')
const Fawn = require('fawn')
const express= require('express')
const {Rental} = require('../models/rent')
const {Movie ,Movieschema} = require('../models/movie')
const {Customer}=require('../models/customer')
const router = express.Router()

Fawn.init('mongodb://localhost/vidly')




router.post('/',async (req,res)=>{
    const customer = await Customer.findById(req.body.customerid)
    const movie = await Movie.findById(req.body.movieid)
    const rental = new Rental({
        customer,
        movie
    })
    
    try{
    new Fawn.Task()
    .save('rentals',rental)
    .run()

    res.send(rental)
    }

    catch(ex){
        console.log(ex)
        
    }

})


module.exports=router