const express= require("express");
const mysql= require("mysql2");
const path = require("path");
const app = express();

// view엔진의 파일들의 경로
app.set("views",path.join(__dirname,"page"));
// 사용할 view엔진은 ejs
app.set("view engine", "ejs");
// 바디객체 사용하려고 쓰는데 깊은 객체가 필요없어서 extended false이다.
app.use(express.urlencoded({extended:false}));

app.get("/",(req,res)=>{
    res.render("main")
})
app.post("/login",(req,res)=>
{
    // 로그인을 정삭적으로 했다 가정하고
    // 토큰을발급
    //유저정보는 객체로만들엊주자
    const name="user1";
    const KEY = process.env.KEY;
    // sign매소드 jwt토큰을 생성 
    // 첫번쨰 매개변수 페이로드
    // 두번째 매개변수 비밀키
    // 세번쨰 매개변수 속성값
    // sign 에서 해싱해줌

    let token= jwt.sign({
        //타입은 jwt
        type:"JWT",
        name:name
    },KEY,{
        // 토큰을 유지시킬 유효시간만료시간 
        expiresIn:"5m",
        // 토큰 발급한사람
        issuer:"user1"

    }
    )
    res.send(JSON.stringify(token));
})
PORT = 8000;
const jwt = require("jsonwebtoken");
const { addAbortSignal } = require("stream");
//모듈가자기오 오면서 conifgtlfgod .env 파일을 읽어서 적용
const dot=require("dotenv").config();

//JWT 토큰을 만들건데
// 비밀키를 가지고 토큰을 만들어서 암호화 시킬예정
// 그럼 그 비밀키는 털리면안된다.

//process.env 객체에 우리가 .env 파일에 설정한이름으로 키값이들어있다.
const KEY = process.env.KEY;
// 페이지 부터 만들자.

app.listen(PORT, ()=>{
    console.log("서버잘열림");
})


//pakage.json
//npm init -y

// express 설치
// npm i express

// 로그인 할때
// JWT 토큰을 사용합니다.
// JWT 존맛탱 ㅋㅋ

// JSON Web Token 의 줄인말
// 웹표준으로 두객체의 JSON객체를 사용해서 정보를 안정성있게 전달해준다

// JWT 토큰은 사용할 정볼르 자체저긍로 가지고있다.(우리가 필요한 것들 유저 정보같은)
// JWT 토큰으로 발급한 토큰은 기본정보(유저의 정보 프로필)
// 그리고 토큰이 정상인지 검증 (서명을 포함하고있다.) signauture

// 주로 로그인이 정상적인지 회원인증 권환에서사용한다.

// JWT은 유저가 로그인을 요청하면 서버에서 유저의 정보를 가지고
// 정상적인 루트로 로그인을요청한 유저면 토큰을 발급해서 전달해준다. 영화표? 보통 기한을 가지고있다. 
// 유저가 서버에 요청을 할때 JWT토큰을 요청을 하면 서버가
// 요청을받고 JWT토큰 이 썩은 토큰인지 검사를 해서 착한 토큰이면 유저가 요청한
// 작업을 처리해주고 응답해준다.

// JWT토큰 을 쓰는 이유는 안정성있게 정보를 전달해서 요청을 할수있다.
// 아무나 사용하면안되기떄문에 인코딩 패싱? 해싱 작업을 한다.
// JWT토큰 을 생성하면 사용할 모듈이 인코딩과 해싱 작업을 해준다

// HMAC : 해싱 기법을 적용해서 메시지의 우변조를 방지하는 기법
// SHA 256 : 임의의 길이 메시지를 256 비트의 축약된 메시지로 만들어 내는 해시 알고리즘

// JWT토큰 의 구조
//..................................................................

// let header = {
//     // 사용하는 해싱 알고리즘
//     alg: "SHA256",
//     // 토큰의 타입
//     type: "JWT"
// }

// let payload={
//     // 토큰의 이름 제목
//     sub:"2193102",
//     // 유저의 이름 (유저 프로필)
//     name:"gusdnr",
//     // 토큰 발급된 시간 발급된지 얼마나 지났는지
//     lat:"123123123"
// }

//..................................................................
// 비밀키 생성
// let signauture=HMACSHA256(BASE64URL(header)+BASE64URL(payload));// 서명 
// heard : 타입과 알고리즘의 정보를 가지고있고
// payload: 유저의 정보와 만료기간이 포함된 객체를 가지고있다.
// signauture : header,payload을 인코딩하고 합쳐서 해싱해 비밀키로 만듦
// 토큰에 관한내용 

// 엑세스토큰과 리프레쉬 토큰

// 사용할모듈 express, jsonwebtoken , dotenv 

//dotenv 어플리켕이션을만들면서
//설정값들을 여기에 작성해둡니다.
// 보안 민감한 정보를 .envvkdlfdp 설정값들을 작성해둔다.
//jwt 토큰, 비밀키,api토큰 등등을 저장해놓는다.

// "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0eXBlIjoiSldUIiwibmFtZSI6InVzZXIxIiwiaWF0IjoxNjgzODY3MDg3LCJleHAiOjE2ODM4NjczODcsImlzcyI6InVzZXIxIn0.B11k2GxjqjSBKYl26jozN_jtiYmKsVBZ2NWCBJnNg3E" 

// 헤더 .페이롣.맨마지막 서명 