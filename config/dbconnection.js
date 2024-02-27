require("dotenv").config();
const mongoose  = require("mongoose");

module.exports={
    dbConnect: async() =>{
        try{
            await mongoose.connect(process.env.MONGODB_URL).then(()=>{
            console.log("Database connected successfully")
            })
        }
    catch (err) {
      console.log(err);
    }
    }
}