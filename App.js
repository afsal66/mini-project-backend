require("dotenv").config();
const express= require("express");
const cors= require("cors");
const dbConnection= require("./config/dbconnection");
const app=express();
const Userrouter=require("./Route/Userrouter");

dbConnection.dbConnect();
app.use(express.json())
app.use(cors())
app.use("/",Userrouter)
// app.use("/admin",Adminrouter)


const PORT=process.env.PORT;

app.listen(PORT,()=>{
    console.log(`server started at port  ${PORT}`);
});
