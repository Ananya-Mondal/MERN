const express=require('express')
const mongoose=require('mongoose')
const cors=require('cors')
const UserModel=require('./models/Users')

const app=express()

app.use(cors())
app.use(express.json())


mongoose.connect("mongodb://127.0.0.1:27017/curd")

//Create Post
app.post("/CreateUser",(req,res)=>{
    UserModel.create(req.body)
    .then(users=>res.json(users))
    .catch(err => res.json(err))
})

//All User get
app.get("/",(req,res)=>{
    UserModel.find({})
    .then(users=>res.json(users))
    .catch(err => res.json(err))
})

//Single User get
app.get("/getUser/:id",(req,res)=>{
    const id=req.params.id;
    UserModel.findById({_id:id})
    .then(users=>res.json(users))
    .catch(err => res.json(err))
})

//Update User 
app.put("/UpdateUser/:id",(req,res)=>{
    const id=req.params.id;
    UserModel.findByIdAndUpdate({_id:id},{name:req.body.name,email:req.body.email,age:req.body.age})
    .then(users=>res.json(users))
    .catch(err => res.json(err))
})

//Delete User 
app.delete("/UserDelete/:id",(req,res)=>{
    const id=req.params.id;
    UserModel.findByIdAndDelete({_id:id},{name:req.body.name,email:req.body.email,age:req.body.age})
    .then(users=>res.json(users))
    .catch(err => res.json(err))
})

//process.env.PORT in hosting
app.listen(3001,()=>{
    console.log("Server is running in port 3001")
})
