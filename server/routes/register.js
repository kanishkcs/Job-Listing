const express = require("express")
const {register,login} = require("../controllers/Auth")


const registerRoute = express.Router();

registerRoute.post("/register",register)

registerRoute.post("/login",login)



module.exports = registerRoute