const router= require("express").Router();
const {SignUp} =require("../controllers/usersController")

// join/
router.get('/',(req,res)=>{
    console.log("ee")
    res.render("join");
})

// 매개변수로 signup 이 들어온것
router.post('/',SignUp);

module.exports=router;