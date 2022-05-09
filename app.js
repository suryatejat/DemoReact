const express = require("express")
const app = express()
const mongoose = require("mongoose")
require("dotenv/config")
const bodyParser = require("body-parser")
const cors = require("cors")
const login = require("./Routes/Login")

app.use(cors())
app.use(bodyParser.json())
app.use('/login',login)

app.get('/', (req,res) => {
    res.send("Home")
})

mongoose.connect(process.env.Db_Connection, () =>{
    console.log("Database Connected")
})

app.listen(3000)