
const registerSchema = require("../model/register")

exports.register = async(req,res)=>{
    try{

  
    const {name,email,password,isRecruiter} = req.body
    
    const emailExists = await registerSchema.findOne({email:email})
    if(password.length<8){
        res.status(422).send("password length short")
    }
    else if(emailExists){
        res.status(202).json({
            sucess:false,
            message:"email allready exists",
        })
    }
    else{
        const newUser = await  registerSchema.create({
            name,email,password,isRecruiter
        })

        res.status(200).json({
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
