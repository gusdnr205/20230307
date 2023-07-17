const {User} =require("../models");
const bcrypt = require("bcrypt");

exports.signUp=async (req,res)=>{
    try {
        const {name,age,user_id,user_pw} = req.body;
        console.log("이거 reqbody임",req.body)

        const user = await User.findOne({where:{user_id}});
        if(user!=null)
        {
            // 유저 조회된거니까 중복 회원 가입막음
            
            // return res.send("중복회원 가입 막음");
            console.log("중복가입막음")
            return 1
        }
        const hash = bcrypt.hashSync(user_pw,10);
        await User.create({
            name,
            age,
            user_id,
            user_pw:hash
        })
        // res.redirect("http://localhost:3000/");
        // res.json()
    } catch (error) {
        console.log(error);
    }
}