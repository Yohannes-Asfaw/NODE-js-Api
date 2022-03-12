const asyncMiddelware = require('../middelware/async1')
const express = require('express')
const router = express.Router()
const {Gener} = require('../models/gener')
const auth = require('../middelware/auth')


router.get('/',async (req,res)=>{
    throw new Error('could not connect to mongodb');
    const gener = await Gener.find()
    res.send(gener)
})
router.post('/',async(req,res)=>{
    let gener = new Gener({
        name:req.body.name
    })
    gener = await gener.save()
    res.send(gener)
})

module.exports=router