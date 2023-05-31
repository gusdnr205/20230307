const {User} =require("../models");
const bcrypt = require("bcrypt");

exports.signUp=async (req,res)=>{
    try {
        const {name,age,user_id,user_pw,imgs} = req.body;
        console.log("이거 reqbody임",req.body)

        const user = await User.findOne({where:{user_id}});
        if(user!=null)
        {
            // 유저 조회된거니까 중복 회원 가입막음
            
            return res.send("중복회원 가입 막음");
        }
        const hash = bcrypt.hashSync(user_pw,10);
        await User.create({
            name,
            age,
            user_id,
            user_pw:hash
        })
        res.redirect("http://127.0.0.1:5500/202305/20230526/frontend/login.html");
    } catch (error) {
        console.log(error);
    }
}