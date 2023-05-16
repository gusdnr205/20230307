// pacakjson
// 서버객ㅊ
// 서버대기상태
// bodyr객체 사용 
// 세션사용
// detenv
// mydql 
// viewengine 경로사용 view는 ejs
// jwt 토큰 사용

const express=require("express");
const app=express();
const det=require("dotenv").config();
const mydql = require("mysql2");
const path=require("path");
const jwt= require("jsonwebtoken");
const session = require("express-session");
const joinRouter = require("./routers/joinRouter");
const loginRouter = require("./routers/loginRouter");



app.set("views",path.join(__dirname,"page"));
app.set("view engine","ejs")
app.use(express.urlencoded({extended:false}));
app.use(session({
    // 세변발급에 사용할 비밀키 노출안되게 env로 만들자
    secret:process.env.SESSION_KEY,
    // 세션을 저장하고 불러올떄 세션을 다시 저장할지 여부
    resave:false,
    // 세션에 저장할때 초기화여부
    saveUninitialized:true

}))

app.use('/join',joinRouter);
app.use('/login',loginRouter);




app.listen(8000,()=>{
    console.log("잘열림");
})