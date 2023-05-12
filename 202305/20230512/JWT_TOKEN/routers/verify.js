const router =require("express").Router();
const dot = require("dotenv").config(); // 검증위해?
const jwt =require("jsonwebtoken");
router.post('/',(req,res)=>{
   const token = req.session.token;
    // 토큰이 유효한지 검증
    // verify 메서드가 토큰이 유효한지 검증
    // 첫번쨰 매개변수가 토큰을 전달하고
    // 두번쨰 매개변수로 key를 전달
    // 세번쨰 매개변수로 콜백함수 전달
    // 콜백함수의 매개변수로 첫번쨰는 err내용 객체 
    // 두번쨰는 해석된 객체 
    // jwt verify 로 복호화 
    const key=process.env.KEY;
    jwt.verify(token,key,(err,decoded)=>{
        if(err){
            console.log("토큰 고장남")
            res.send("토큰 썩었거나 변조되엇음")
        }else{
            // 해석된 객체
            console.log(decoded);
            res.send(decoded);
        }
    });
})

module.exports=router;