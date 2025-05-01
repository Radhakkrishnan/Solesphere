const jwt = require("jsonwebtoken")
const User = require("../models/userModel")

const verifyToken = async(req, res, next) => {
    let token;
    const authHeaders = req.headers.Authorization || req.headers.authorization

    if(authHeaders && authHeaders.startsWith("Bearer")){
        token = authHeaders.split(" ")[1]
        if(!token){
            res.status(400).json({message:"Token is missing!"})
        }
        try{
            const decode = jwt.verify(token,process.env.SECRET_KEY)
            const user = await User.findById(decode.id)
            if(!user){
                return res.status(401).json({ message: "User not found!" })
            }
            req.user = user
            console.log("Decoded user:", decode)
            next()
        }catch(err){
            res.status(401).json({message:"Invalid Token!"})
        }
       
    } 
    else{
        res.status(402).json({message:"Not authorized. Token missing"})
    }
}

module.exports = verifyToken