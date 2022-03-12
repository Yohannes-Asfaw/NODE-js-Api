const express = require('express')
const router = express.Router()
const {Movie} = require('../models/movie')


router.get('/',async (req,res)=>{
    const movie = await Movie.find()
    res.send(movie)

})

module.exports=router