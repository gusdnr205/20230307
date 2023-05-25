const router=require("express").Router();
const {User}=require("../models");
const {viewnotallowuser,upgrademembership}=require("../controllers/adminallowcontroller");

router.get('/admin',async(req,res)=>{
    const data= await viewnotallowuser();
    console.log("ddddd");
    res.render("admin",{data});
})

router.get('/admin/allow/:id',async(req,res)=>{
    const id=req.params;
    console.log(id);
    await upgrademembership(id.id,1);
    const data= await viewnotallowuser();
    res.redirect('/admin');
    console.log("반환합니다.")
})

module.exports=router;