//npmi jsonwebtoken dotenv

const express =require("express").Router();
const dot = require("dotenv").config();
const jwt =require('jsonwebtoken');
const router = require("./page");

router.post("/login",(req,res)=>{
    const name = "doon"
    const key=process.env.KEY;
    let token = jwt.sign({
        type:"JWT",
        name:name,

    },key,{
        expiresIn:"3m",
        issuer:name
    }
    )
    req.session.token=token;
    res.render("page2");

    // 다른곳에서 로그인했으면 로그인 , 중복로그인을 방지해주자
    // 데이터베이스에 엑세스 토큰을 저장하고
    // 로그인을 하면 엑세스 토큰을 갱신 시켜주는 작업

})

module.exports=router;