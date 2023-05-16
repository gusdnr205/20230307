//express path mysql ejs

const express= require("express");
const path= require("path");
const mysql2=require("mysql2/promise");
const ejs= require("ejs");
const joinRouter=require("./routers/joinrouter");
const loginRouter=require("./routers/loginrouter");
const app=express();

app.set("views",path.join(__dirname,"page"));
app.set("view engine","ejs");
app.use(express.urlencoded({extended:false}));
app.use('/join',joinRouter);
app.use('/login',loginRouter);




app.listen(8000,()=>{
    console.log("server on");
})