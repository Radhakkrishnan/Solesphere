const product = require("../models/productmodel")

const postProduct = async(req, res) => {
    try{
        const {name, price, description, category, stock, tag, image } = req.body

        const newProduct = new product({name, price, description, category, stock, tag, image})
        await newProduct.save()
        res.json({message:"New product created", newProduct})
    }
    catch(err){
        res.json({message:"Error creating new product" , error:err.message} )
    }
}

module.exports = postProduct