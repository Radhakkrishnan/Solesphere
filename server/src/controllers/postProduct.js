const product = require("../models/productmodel")

const postProduct = async(req, res) => {
    try{
        if(Array.isArray(req.body)){
            const newProducts = await product.insertMany(req.body)
            res.status(200).json({message:"Multiple products created", newProducts})
        } else {
            const {name, brand, price, description, category, stock, tag, image } = req.body

            const newProduct = new product({name, brand, price, description, category, stock, tag, image})
            await newProduct.save()
            res.status(200).json({message:"New product created", newProduct})
        }
    }
    catch(err){
        res.status(400).json({message:"Error creating new product" , error:err.message} )
    }
}

module.exports = postProduct