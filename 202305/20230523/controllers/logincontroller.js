const {User}=require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.login=async(req,res)=>{
    try {
        const {id,pw}=req.body;
        const user=await User.findOne({where:{user_id:id}})
        console.log("111111user",user);
        if(user.dataValues.membership==0)
        {
            // return res.send("관리자의 승인을 기다려주세요");
        }
        const same = bcrypt.compareSync(pw, user.dataValues.user_pw);
        if(same){
            console.log("비교 잘끝남");
            let token = jwt.sign({
                id : user.dataValues.user_id,
                name : user.dataValues.name,
                membership : user.dataValues.membership
            },process.env.ACCESS_TOKEN_KEY,{
                expiresIn : "5m"
            });
            req.session.access_token = token;
            console.log(token);
            res.redirect("/main");
        }else{
            res.send("비밀번호 확인 하세요~");
         }
        
    } catch (error) {
        console.log("login 컨트롤러 오류",error);
    }
}
