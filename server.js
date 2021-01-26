const express = require("express");
const multer = require("multer") ;
const fs =require('fs') ;
const app = express();
var bodyParser = require('body-parser');
const connectDB = require("./config/connectDB");
const logger = require("./middlewares/logger");
const authRouter = require("./routes/authRouter");
const articleRouter = require("./routes/articleRouter");
const entrepriseRouter = require("./routes/entrepriseRouter");
const tshirtRouter = require("./routes/tshirtRouter")
const shoesRouter = require("./routes/shoesRouter")
const jeansRouter = require("./routes/jeansRouter")



 // middlewares
 app.use(express.json());
 app.use(bodyParser.json());
 app.use("/api/auth",logger);


//  connect the db 
connectDB();
app.use("/api/auth",authRouter)
app.use("/api",articleRouter)
app.use("/api",entrepriseRouter)
app.use("/api/tshirt" ,tshirtRouter )
app.use("/api/shoes" ,shoesRouter )
app.use("/api/jeans" ,jeansRouter )
//route 
// app.use('/static', express.static("uploads"))

// app.post('/uploadFile' , uploads.single("jeansImage") ,(req,res)=>{
//     let fileType = req.file.mimetype.split("/")[1];
 //    let newFileName = `${req.file.filename}.${fileType}` ;
  //   var paths = req.file.path;
   //  console.log(paths)
     //fs.rename(`./public/uploads/${req.file.filename}` , `./public/uploads/${newFileName}` ,function(){
      //   res.send('200')
      //})
 
 //});
// start the server
const port = process.env.port || 5000;
app.listen(port, (err) => err ? console.error(err) : console.log(
    `the server is running on port${port}`
));