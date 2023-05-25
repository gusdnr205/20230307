const express =require("express");
const path=require("path");
const app =express();
const borderrouter=require("./routers/border");
const loginrouter=require("./routers/login");
const signuprouter=require("./routers/signup");
const adminrouter=require("./routers/admin");
const dot = require("dotenv").config();
const session = require("express-session");
const {sequelize}= require("./models/")

app.set("views",path.join(__dirname,"page"));
app.set("view engine","ejs");
app.use(express.urlencoded({extended:false}));
app.use(session({
    secret : process.env.SESSION_KEY, // 세션키 넣을것.
    resave : false, // 다시 저장할지 여부
    saveUninitialized : false, // 초기화 할지 여부
}))


sequelize.sync({force:false}).then((e)=>{
    console.log("sync연결성공");
}).catch((err)=>{
    console.log("실패",err);
})


app.use("/main",borderrouter);
app.use("/signup",signuprouter);
app.use("/login",loginrouter);
app.use("/",adminrouter);
app.listen(4000,()=>{
    console.log("서버 잘열림");
})