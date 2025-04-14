const product = require("../models/productmodel")

const getProducts = async(req, res) => {
   try{
    const allProducts = await product.find()
    res.status(200).json({message:"Fetched all products", allProducts})
   }
   catch(err)
   {
    res.status(400).json({message:"Error fetching all products", error: err.message})
   }
}
module.exports = getProducts