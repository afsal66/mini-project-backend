require("dotenv").config();
const express= require("express");
const cors= require("cors");
const dbConnection= require("./config/dbconnection");
const app=express();

dbConnection.dbConnect();

const PORT=process.env.PORT;
app.listen(PORT,()=>{
    console.log(`server started at port  ${PORT}`);
});
app.use("/",Userrouter)
app.use("/admin",Adminrouter)