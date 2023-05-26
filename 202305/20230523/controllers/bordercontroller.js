const {User,post,admin}=require("../models");



exports.bordermain = async(req,res)=>{
    console.log("잘접근함");
    res.render("main");
}