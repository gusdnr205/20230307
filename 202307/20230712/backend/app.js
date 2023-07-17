const express=require("express");
const app = express();
const cors=require("cors");
const dot =require("dotenv").config("");
const session=require("express-session");
const {sequelize} =require("./models");
const path = require("path");
const signuprouter= require("./routers/signup");
const writeController=require("./routers/write");
const loginrouter= require("./routers/login");
const axios=require("axios");
// 1. axios 전역 설정
axios.defaults.withCredentials = true; // withCredentials 전역 설정

app.use(session({
    secret:"sfsfsfsf",
    resave:false,
    saveUninitialized:false
}))
sequelize.sync({force:false}).then(()=>[
    console.log("sequelize연결성공")
]).catch((err)=>{
    console.log(err);
})



app.use(express.urlencoded({extended:false}));
app.use(cors({
    origin: true,
    credentials:true
}))

app.use(express.json());
app.use('/signup',signuprouter);
app.use('/login',loginrouter);
app.use('/write',writeController);




const server = app.listen(4000,()=>{
    console.log("서버온")
})