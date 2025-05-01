const Order = require("../models/orderModel")


const postOrder = async(req, res) => {
    try{
        const { orderItems, totalAmount} = req.body
        console.log("User from token:",req.user)
        const userId = req.user._id;


        if(!orderItems || orderItems.length == 0){
            return res.status(400).json({message:"No Orders Yet"})
        }

        const newOrder = new Order({user: userId, orderItems, totalAmount})
        const createdOrder = await newOrder.save()
        res.status(201).json({
            message:"Order placed successfully",
            order:createdOrder
        })

    } catch(err){
        res.status(400).json({
            message:"Error in placing order",
            Error: err.message
        })
    }
}

module.exports = postOrder