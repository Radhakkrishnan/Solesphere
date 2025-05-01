const Order = require("../models/orderModel")


const getOrders = async(req, res) => {
   
    try{
        const userId = req.user._id
        const response = await Order.find({user: userId}).sort({createdAt: -1})
        res.status(200).json({
            message:"Fetched User Orders",
            Orders: response
        })
    } catch(err){
        res.status(400).json({
            message:"Error in getting user Orders",
            Error: err.message
        })
    }
}

module.exports = getOrders