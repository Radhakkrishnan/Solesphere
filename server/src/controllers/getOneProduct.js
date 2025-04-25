const product = require("../models/productmodel")


const getOneProduct = async(req,res) => {
    try{
        const { id } = req.params
        let response = await product.findById(id)
        res.status(200).json({message:"fetched product", response})
    }
    catch(err){
        res.status(400).json({message:"Error in getting a product", error: err.message})
    }
}

module.exports = getOneProduct