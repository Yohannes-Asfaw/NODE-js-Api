const express = require('express')
const bcrypt = require('bcrypt')
const {User,validateUser} = require('../models/users')
const router = express.Router()
const lodash = require('lodash')


router.post('/',async (req,res)=>{
    const {error} = validateUser(req.body)
    if(error){
        return res.status(400).send(error.details[0].message)
    }
    let user = await User.findOne({email:req.body.email})
    if(user){
        return res.status(400).send('user already registered')
    }
     user = new User({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password
    })

    const salt = await bcrypt.genSalt(10)
    user.password = await bcrypt.hash(user.password,salt)
     await user.save()
      const token = user.generateregtoken()
    res.header('-x-login-token',token).send(lodash.pick(user,['name','email']))
    

})

module.exports=router