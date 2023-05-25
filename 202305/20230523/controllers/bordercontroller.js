const {User,post,admin}=require("../models");
const dot = require("dotenv").config();



exports.bordermain = async(req,res)=>{
    console.log("잘접근함");
    console.log(process.env.SESSION_KEY)
    res.render("main");
}