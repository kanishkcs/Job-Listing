const mongoose = require("mongoose")
require("dotenv").config()


const connectDB = ()=>{
    mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParser: true,
        useUnifiedTopology:true
    })
    .then(()=>{
        console.log("Database Connected Sucessfully");
    })
    .catch((error)=>{
        console.log(error);
        process.exit(1);
    })
}

module.exports = connectDB;

