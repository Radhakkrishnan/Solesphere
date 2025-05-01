const mongoose = require("mongoose")

const orderSchema = new mongoose.Schema(
    {
        user:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },
        orderItems:[
            {
                product:{
                    type:mongoose.Schema.Types.ObjectId,
                    ref:"Product",
                    required: true
                },
                name: String,
                number: Number,
                price: Number
            }
        ],
        totalAmount:{
            type: Number,
            required:true
        },
        isPaid:{
            type:Boolean,
            default:false
        },
        paidAt: Date,
        isDelivered:{
            type: Boolean,
            default: false
        },
        deliveredAt:Date
    },
    {
        timestamps: true
    }
)

const order = mongoose.model("Order", orderSchema)
module.exports = order