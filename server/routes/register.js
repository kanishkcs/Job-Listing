const express = require("express")
const {register} = require("../controllers/register")


const registerRoute = express.Router();

registerRoute.post("/register",register)


module.exports = registerRoute