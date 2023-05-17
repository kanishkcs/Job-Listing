const express = require("express")
const app = express();
const cors = require("cors")

app.use(cors())

require("dotenv").config()
// database connection
const connectDB = require("./config/database")

connectDB();

// Route
const registerRoute = require("./routes/register")

port = process.env.PORT || 3300,




app.use(express.json());
app.use("/api/v1/",registerRoute)

app.listen(port,()=>{
    console.log(`App started at ${port}`)
})
