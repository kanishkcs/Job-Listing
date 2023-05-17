const mongoose = require("mongoose")

const registerSchema = new mongoose.Schema({
    name:{
        required:true,
        type:String,
        
    },
    email:{
        type:String,
        requried:true,
        unique:true,

    },
    password:{
        type:String,
        required:true,
        minLength:8
    },
    isRecruiter:{
        type:Boolean,
        required:true,
        default:false
    }

})

module.exports = mongoose.model("register",registerSchema)