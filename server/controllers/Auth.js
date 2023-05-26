
const registerSchema = require("../model/register")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

require("dotenv").config()

exports.register = async(req,res)=>{
    try{

  
    const {name,email,password,isRecruiter} = req.body
    
    const emailExists = await registerSchema.findOne({email:email})
    if(password.length<8){
        return res.status(201).send("password length short")
    }
    else if(emailExists){
      return  res.status(202).json({
             sucess:false,
            message:"email allready exists",
        })
    }
    else{
        let hashpassword ;
        try{
            hashpassword = await bcrypt.hash(password,12);
        }
        catch(error){
           return res.status(203).json({
                sucess:false,
                message:"error in hashing password",
                })
        }


        const newUser = await  registerSchema.create({
            name,email,password:hashpassword,isRecruiter
        })

        return res.status(200).json({
            sucess:true,
            message:"Account Created Successfuly",

        })
    }

}
catch(error){
    res.status(400).json({
        sucess:false,
        message:"some issue happend",
    })
}
}


exports.login = async(req,res)=>{
    try{
        const {email,password}= req.body
        //Check if Input is valid
        if(!email || !password){
            return res.status(400).json({
                sucess:false,
                message:"email and password are required",
                })
            }
        var user = await registerSchema.findOne({email:email});
        if(!user){
            return res.status(401).json({
                sucess:false,
                message:"user not found",
            })
        }
        if(await bcrypt.compare(password,user.password)){

            const payload ={
                
                    id:user._id,
                    name:user.name,
                    email:user.email,
                    isRecruiter:user.isRecruiter,
                    
                    
            }
            let token = jwt.sign(payload,process.env.JWT_SECRET,{
                    expiresIn:"2h"
            })


            user = user.toObject()
            user.token = token;
            console.log(user)
            user.password = undefined
            const options ={
                expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 3),
                httpOnly: true,
                
               

            }
            res.cookie("token",token,options).status(200).json({
                sucess:true,
                message:"login successful",
                user:user,
                token:user.token,
            })

        }
        else{
            return res.status(403).json({
                sucess:false,
                message:"Password Incorrect"
            })
        }
    }
        
    catch(error){
        console.log(error)
        return res.status(500).json({
            sucess:false,
            message:"Internal server error"
        })

    }
}