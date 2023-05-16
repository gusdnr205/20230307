const router=require("express").Router();
const {SignUp} =require("../controllers/userscontroller");

router.get('/',(req,res)=>{
    res.render("join");
})

//함수도 값으로 익명함수자리에 들어가서 사용가능
router.post('/',SignUp);

module.exports=router;
