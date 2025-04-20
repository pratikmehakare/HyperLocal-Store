const mongoose = require("mongoose")

const dbConnection = async () =>{
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB connected successfully.");
    }catch(error){
       console.log("DB Connction fail ",error)
    }
}

module.exports = dbConnection;