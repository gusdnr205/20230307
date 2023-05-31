const { User } = require('../models');
// 로그인 할때 bcrypt 사용 jsonwebtoken 설치
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.login = async (req, res) => {
    const {user_id,user_pw} = req.body;
    try {
        const user = await User.findOne({where:{user_id}});
        if(user==null){
            return res.send("가입 안한 아이디임~");
        }
        const same=bcrypt.compareSync(user_pw,user.user_pw);
        const {name,age} = user;
        if(same){
            let token =jwt.sign({
                name:user.name,
                age:user.age

            },process.env.ACCESS_TOKEN_KEY,{
                expiresIn:"20m"
                
            });
            req.session.access_token=token;
            req.session.name=user.name;
            // " / : "여기서 경로는 백엔드의 도메인 경로 루트 
            // 때문에 프론트의 경로를 작성해주자
            // 이렇게 리다이렉트를 할게아니면 프론트에서 응받 받은 값으로
            // 조건 분기 처리해서 페이지를 전환시켜주면된다, 
            // return res.send("로그인 완료");
            // 배포된 프론트의 경로를 써줘야한다.
            // 이 주소는 html의 라이브 서버 경로이다. 
            return res.redirect("http://127.0.0.1:5500/202305/20230526/frontend/main.html")
        }else{
            return res.send("비밀번호 틀림");
        }
    } catch (error) {
        console.log(error);
    }
}

exports.viewUser = async(req,res)=>{
    const {acc_decoded}=req;
    console.log("asd",acc_decoded);
    const user= await User.findOne({where:{name:acc_decoded.name}});

    // json 형태로 데이터를 응답 
    res.json(user);
}
