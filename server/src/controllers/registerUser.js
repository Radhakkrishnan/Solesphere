const User = require("../models/userModel")
const bcrypt = require("bcryptjs")


const registerUser = async(req,res) => {
    try{
       const {name, email, password, isAdmin, address, phone} = req.body
       const hashedPassword = await bcrypt.hash(password,9)
       const newUser = new User({name, email, password:hashedPassword,isAdmin,address,phone})
       await newUser.save()
       res.status(200).json({message:"User created Successfully", User: newUser})
    } catch(err){
        res.status(400).json({message:"ERROR IN USER CREATION", Error : err.message})
    }
}

module.exports = registerUser