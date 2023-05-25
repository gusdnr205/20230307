const router=require("express").Router();
const {signup}=require("../controllers/signupcontroller");

router.get('/',(req,res)=>{
    res.render("signup");
});
router.post('/',signup)

module.exports=router;