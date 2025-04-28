const User = require("../models/userModel")

const getUser = async(req,res) => {
    try{
        const {id} = req.params
        const response = await User.findById(id)
        res.status(200).json({message:"User fetched", User: response})
    } catch(err){
        res.status(400).json({message:"Error in getting user", Error: err.message})
    }
}

module.exports = getUser