const mongoose = require("mongoose")

const connect = async() => {
    try{
        let conn = await mongoose.connect(process.env.ATLAS_URL)
        console.log(`Database connected ${conn.connection.host}`)
    }
    catch(err){
        console.log(err);
        process.exit(1)
    }
}

module.exports = connect