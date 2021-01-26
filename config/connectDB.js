const mongoose = require("mongoose");
// require("dotenv").config({ path: "./config/.env" });
const config= require("config")
const db = config.get("mongoURI")

const connectDB = async () => {
  const opts = {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  };
  try {
    await mongoose.connect(db, opts);
    console.log("the data base is conected...");
  } catch (error) {
    console.log(error);
  }
};
module.exports = connectDB;
