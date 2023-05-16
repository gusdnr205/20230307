//입장트큰만 만들어서 로그인 검증했는데 

// 엑세스 토큰만 사용한 방식

// 1. 이용자가 로그인시도를 하고
// 2. 서버에서 이용자를 확인하고 이밪ㅇ권을 발급해주고
// JWT토큰 인증 정보를 pauload에 할당하고 생성
// 3. 생성한 토큰을 클라이언트에 반환해주고 클라이언트는 이 입장권을 가지고있는다.
// 4. 클라이언트가 서버에 요청을 할때 이 입장구너도 같이 보내서 요청을 시도한다.
// 5. 서버는 그입장권을 요청을 받아서 그 입장권이 유효한지 확인하고 
// 유효한 입장권이면 요청을처리하고 요청에대한 응답을 해준다. 
// 6. 입장권이 정상적인지 확인하고 썩었는지 변조가 돠었는지 (변조가 되었고 썪었으면 다시 재로그인 시킨다.)
// (입장권 새로산다. 

// refresh token을 같이 사용하면
// access token만 사용하면 인증보안이 취약할수있어서 다른사람이 access token 을 탈추했을때
// 토큰의 유효기간이 끝날때 까지는 막을수가없다. 그래서 유효기간을 짧게주고 짧게 주면 
// 로그인을 계속해야하는 번거로움이 생기고 (사용자가 이용하기 힘들다.) refresh token의 효기간을 길게주고
// access token의 유효기간을 짧게 주어서 만료가되면 refresh token으로 재발급 받는다.
// 물론 refresh token 조차 만료되면 다시 로그인해야한다.
// refresh token은 유효기간을 길게주고 access token이 유효기간이 끝났을때 발급해주는 역할만 하면된다.

//access toekn과 refresh 토큰을 같이 사용한 인증방식
// 1. 클라이언트가 로그인 한다. 
// 2. 서버에서 사용자를 확인하고 입장권 권한 인증 정보를 payload에 할당하고 생성
// refresh token을 만들어서 데이터베이스에 저장해주독 2개의 토큰 정부 클라이언트에 전달해준다.
// 3. 클라이언트도 두토큰을 가지고있고 
// 4. 클라이언트가 요청을 할대 access toeken을 전달해서 요청한다.
// 5. 서버는 전달받은 토큰을 확인하고 access token을 디코드 해서 사용자 정볼르 확인하고 
// 6. 토큰이 정상적인지 확인(썩은 토큰인자.) 썩었다면 5번이되지않는다.
// 7. 날짜가 지난 토큰이거나 변조된 토큰이면 새로 로그인 시킬수있게 한다.
// 8. 만약에 날짜가 지난 토큰이면 retresh token으로 다시 재발급해준다.

// 쉽게 엑세스토큰은 우리가 사용하던 그대로이고 
// refresh token만 추가되었는데 access token의 발급 용도로만 알고있자.
// 오늘 사용할 모듈
// dotenv express cookie-parser jsonwebtoken

// package.json
// 서버 객체만들고
// 서버대기상태
// view엔진 경로설정
// view엔진 ejs 사용
// 바디 객체사용

const express= require("express");
const path = require("path")
const app= express();
const dot =require("dotenv").config(); //.env 파일 사용
const cookie=require("cookie-parser");
const jwt =require("jsonwebtoken");
const { decode } = require("punycode");

app.set("views",path.join(__dirname,"page"));
app.set("view engine","ejs");
app.use(express.urlencoded({extended:false}));
app.use(cookie());

//더미로 회원가입한사람의 정보 객체
const user={
    id :"gusdnr",
    pw : "123",

}
// node moudle 경로 상에 .env가 존재해야한다.


app.get('/',(req,res)=>{
    res.render("login");
})
app.post('/login',(req,res)=>{
    // 요청객체의 body에 user_id랑 user_pw
    const{user_id,user_pw} =req.body;
    if(user_id === user.id && user_pw ===user.pw){
        //access token 발급
        const accessToken = jwt.sign({
            id:user.id

        },process.env.ACCESS_TOKEN_KEY,{
            expiresIn: "20s"
        });
        const refreshToken = jwt.sign({
            id:user.id
        },process.env.REFRESH_TOKEN_KEY,{
            expiresIn:"1d",
        })
        // 쿠키생성
        res.cookie("refresh",refreshToken,{maxAge:24*60*60*1000})
        res.render("join",{accessToken})
    }
})
// 바디 파서 깊은객체 사용 x;
// app.use(express.urlencoded({extended:false}));


app.post("/refresh",(req,res)=>{
    // 옵션체이닝 뒤에오는 키값이 있는지 먼저 확인하고 값을 호출해서 반환
    // 그래서 크래쉬방지
    if(req.cookies?.refresh){
        const refreshToken=req.cookies.refresh;
        jwt.verify(refreshToken,process.env.REFRESH_TOKEN_KEY,(err,decode)=>{
            //err가 있으면 다시 로그인하세요~
            if(err)
            {
                res.send("로그인을 다시해주세요");
            }else{
                const accessToken=jwt.sign({
                    id:user.id
                },process.env.ACCESS_TOKEN_KEY,{
                    expiresIn:"20s"

                })
                res.render("join",{accessToken});
            };
        })
    }else{15
        res.send("다시 로그인해주세요");
    }
})
app.listen(4000,()=>{
    console.log("서버잘열림");
})