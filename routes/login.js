const express = require('express')
const bcrypt = require('bcrypt')
const {User} = require('../models/users')
const router = express.Router()
const Joi = require('joi')
const jwt = require('jsonwebtoken')
const config = require('config')

router.post('/',async (req,res)=>{
    const {error} = validateUser(req.body)
    if(error){
        return res.status(400).send(error.details[0].message)
    }
    let user = await User.findOne({email:req.body.email})
    if(!user){
        return res.status(400).send('invalid email or password')
    }
    const isvalid = await bcrypt.compare(req.body.password,user.password)
    if(!isvalid){
        return res.status(400).send('invalid email or password')
    }
    const token = user.generateregtoken()
    res.send(token)

    function validateUser(user){
    const schema = Joi.object({
        email:Joi.string().min(5).required().email(),
        password:Joi.string().min(4).max(1024).required()
    })
    return schema.validate(user)
}

})

module.exports=router