const User = require("../models/userModel")

const getUsers = async(req,res) => {
    try{
        let response = await User.find()
        res.status(200).json({
            message:"Fetched all users",
            users: response
        })
    }
    catch(err){
        res.status(400).json({
            message:'Error in getting all users',
            Error: err.message
        })
    }
}

module.exports = getUsers