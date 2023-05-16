const { Login, verifyLogin } = require("../controllers/usersController");

const router=require("express").Router();


// login/ 경로
router.get("/",(req,res)=>{
    console.log("asd");
    res.render("login");
})

router.post('/',Login)

//로그인 상태에서 요청해야하는 작업은?
router.get("/mypage",verifyLogin,(req,res)=>{
    console.log('ㅎㅎ 발사')
    res.send("로그인 상태로 마이페이지 표시")
})
module.exports = router;