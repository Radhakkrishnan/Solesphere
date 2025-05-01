const bcrypt = require("bcryptjs")
const User = require("../models/userModel")
const jwt = require("jsonwebtoken")

const loginUser = async(req,res) => {
    try{
        const { email, password } = req.body
        //Check if the email is present on our database 
        const user = await User.findOne({email})
        if(!user) {
            res.status(401).json({
                message:"User Not Found!"
            })
        }
        //Check if the password matches 
        const isMatch = await bcrypt.compare(password, user.password)
        if(!isMatch){
            res.status(400).json({
                message:"Password does not match"
            })
        }

        const token = jwt.sign({id:user._id}, process.env.SECRET_KEY,{expiresIn:"1h"})

        res.status(200).json({
            message:"User logged in succesfully",
            token,
            User: user
        })

    } catch(err){
        res.status(400).json({
            message:"Error in login process",
            Error: err.message
        })
    }
}

module.exports = loginUser