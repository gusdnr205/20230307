// 로그인 페이지 
// 복습으로?

// 폴더를 나누어서
// 배포를해서 프론트를 수정하면 프론트에만 푸쉬
// 백엔드를 수정하면 백에만 푸쉬

// 프로젝트 관리
// 백엔드랑 프론트랄 나눠서 깃 레파지 토리 파놓고 푸쉬

// express express-session  cors sequelize mysql2 dotenv
// 프로젝트 시작 package.json
// 서버 대기상태
// body객체 사용
const express=require("express");
const app = express();
const cors = require("cors");
const dot= require("dotenv").config();
const session=require("express-session");
const loginrouter= require("./routers/login");
const signuprouter= require("./routers/signup");
const writeController=require("./routers/write");
const {sequelize}=require("./models");

// 노드모듈이랑 팩제이슨이 밖에있다면 백엔드폴더안에 위치 시킨뒤 터미널에서 cd backend를 이용해서 접근한다.
// 그냥 접근하면 Access to XMLHttpRequest at 'http://127.0.0.1:4000/' from origin 'http://127.0.0.1:5500' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.
// 이런오류가 뜬다. 
// 다른 도메인에서 악의적으로 접근할수 없도록 도메인 접근시 발생하는 보안정책 
// 다른 도메인과 통신을 안전하게 유지 시키기위해서 보안 정책이있다.

app.use(session({
    secret:process.env.SESSION_KEY,
    resave:false,
    saveUninitialized:false
}))

sequelize.sync({force:false}).then(()=>{
    console.log("연결성공");

}).catch((err)=>{
    console.log(err);
})
app.use(express.urlencoded({extended:false}));
// cors모듈을 가지고 도메인을 허용해주자
// Access-control-Allow-origin 을 헤더에 포함해서
// 접근을 하용하고 응답하고 브라우저에서 응답을 받은뒤
// 헤더값을 확인해서 접근을 허용 또는 차단한다.
// 미들웨어로 추가
//origin: 이 옵션은 서버의 리소스에 액세스할 수 있는 허용된 원본 또는 원본을 지정합니다
app.use(cors({
    // 도메인 허용옵션
    // 접근을 허용할 도메인
    // 여러개의 도메인을 허용하고싶다면 배열의 형태로 넣어 주면된다. [http://127.0.0.1/5500, http://127.0.0.1/5501]
    origin: "http://127.0.0.1:5500",
    // 클라이언트의 요청에 쿠키를 포함할지의 속성
    credentials:true,
}))

app.get("/",(req,res)=>{
    res.send("응답함");
})

app.use('/signup',signuprouter);
app.use('/login',loginrouter);
app.use('/write',writeController);
const server=app.listen(4000,()=>{
    console.log("서버온");
})

