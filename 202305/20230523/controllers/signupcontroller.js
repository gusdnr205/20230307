const {User} =require("../models");
const bcrypt = require("bcrypt");

exports.signup= async(req,res)=>{
    try {
        const {id,pw,name}=req.body;
        const user= await User.findOne({where:{id}});
        console.log(user);
        if(user != null){
            return res.send("중복된 아이디 입니다~");
        }
        const hash=bcrypt.hashSync(pw,10);
        // creater insert랑 비슷?
        User.create({
            name:name,
            membership:0,
            user_id:id,
            user_pw:hash,
        });
        res.redirect('/login')

    } catch (error) {
        console.log(error);
    }
}

