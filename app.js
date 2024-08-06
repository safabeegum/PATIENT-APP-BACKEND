const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const bcrypt = require("bcrypt")
const loginModel = require("./models/admin")
const app = express()
app.use(cors())     //middleware
app.use(express.json()) //to handle json data

mongoose.connect("mongodb+srv://safabeegum:mongodb24@cluster0.pbzbbey.mongodb.net/patientdb?retryWrites=true&w=majority&appName=Cluster0")
app.get("/test",(req,res)=>{
    res.json({"status":"success"})
})


//admin signup
app.post("/adminsignin",(req,res)=>{
    let input = req.body
    let hashedPassword=bcrypt.hashSync(input.password,10)
    input.password=hashedPassword
    console.log(input)
    let result = new loginModel(input)
    result.save()
    res.json({"status":"success"})

})

app.listen(8081,()=>{
    console.log("server started")
})