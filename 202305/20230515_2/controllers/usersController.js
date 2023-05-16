const session = require("express-session");
const {userList,userInsert,userSelect,userPWUpdate,useerDelete,userRefresh} = require("../modules"); 
// .. 하고 폴더하면 index.js 를 자동으로 찾는다. 
const jwt = require("jsonwebtoken");
exports.Userlist =async (req,res)=>{
    try {
        const data=await userList();
        return data;
    } catch (error) {
        console.log(error);
    }
}

// 회원 가입
exports.SignUp= async (req,res)=>{
    const {user_id,user_pw} =req.body;
    try {
        await userInsert(user_id,user_pw);
        res.redirect('/login');
    } catch (error) {
        console.log(error);
    }
}

//로그인 

exports.Login = async (req,res)=>{
    const {user_id ,user_pw}=req.body;
    try {
        const data =await userSelect(user_id);
        console.log(data);
        // 유저 조회가 되었으면 user_id가있겠져?
        if(!data?.user_id)
        {
            return res.send("아이디 없음")
        }

        if(data.user_pw !== user_pw){
            return res.send("비밀번호 틀림");
        }
        console.log("여기까지오니?");
        //여기까지 통과하면 로그인성공
        // access token 발급
        const accessToken= jwt.sign({
            //user 프로필에 들어가는거
            user_id:data.user_id,
            mail:"user1@naver.com",
            nick:"user1"

        },process.env.ACCESS_TOKEN_KEY,{
            expiresIn: "5s",

        });
        //refresh token 발급
        const refreshToken=jwt.sign({
            user_id:data.user_id,

        },process.env.REFRESH_TOKEN_KEY,{
            expiresIn:"15s"
        })

        await userRefresh(user_id,refreshToken);
        req.session.access_token=accessToken;
        req.session.refres_token=refreshToken;
        res.send({access:accessToken,refresh:refreshToken})
    } catch (error) {
        console.log(error);
    }
}

// 유저 토큰 검증 
exports.verifyLogin =async (req,res,next)=>{
    // next();
    // res.send("여기서 끝");
    //세션값을가져오고
    const {access_token,refres_token} =req.session;
    jwt.verify(access_token,process.env.ACCESS_TOKEN_KEY,(err,acc_decoded)=>{
        if(err){
            // 썩은 토큰이면
            console.log('썩었다.',err)
            jwt.verify(refres_token,process.env.REFRESH_TOKEN_KEY,async(err,ref_decode)=>{
                if(err){
                    console.log("refresh token 만료")
                    res.send("다시 로그인 하세요");
                }
                else{
                    const data = await userSelect(ref_decode.user_id);
                    if(data.refresh == refres_token){
                        const accessToken = jwt.sign({
                            user_id:ref_decode.user_id
                        },process.env.ACCESS_TOKEN_KEY,{
                            expiresIn:"5s"
                        })
                        req.session.access_token=accessToken;
                        console.log("access_token 재발급");
                        next();
                    }else{
                        res.send("중복 로그인 방지")
                    }
                }
            })
            //access 토큰이 유효하면
        }else {
            console.log("로그인 정상 유지중");
            next();
        }
    })

}