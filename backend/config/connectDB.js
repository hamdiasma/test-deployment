
const mongoose = require ("mongoose");
require("dotenv").config({path: "./config/.env"});
const connectDB = async () =>{
    const opts = {
        useNewUrlParser: true ,
        useUnifiedTopology: true ,
    }
try{
    await mongoose.connect(process.env.MONGO_URL,opts)
    console.log("the data base is conected...");
}
catch(error){
  console.log(error);
}
 };
 module.exports = connectDB ;