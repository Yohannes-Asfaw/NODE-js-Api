const mongoose = require('mongoose')
const Joi = require('joi')
const jwt = require('jsonwebtoken')
const config = require('config')


const userschema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        unique:true,
        required:true,
        minlength:5,
        maxlength:50
    },
    password:{
        type:String,
        required:true,
        minlength:4,
        maxlength:1024

    }
})

userschema.methods.generateregtoken =function(){
const token = jwt.sign({_id:this._id},config.get('jwtwebtoken'))
return token
}

const User = mongoose.model('User',userschema)

function validateUser(user){
    const schema = Joi.object({
        name:Joi.string().required(),
        email:Joi.string().min(5).required().email(),
        password:Joi.string().min(4).max(1024).required()
    })
    return schema.validate(user)
}

exports.User=User
exports.userschema=userschema
exports.validateUser=validateUser