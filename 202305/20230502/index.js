// http 요청과 응답을 좀더 편하게 사용할수있도록 도와주는 모듈
// express nodejs에서 제일 인기가 많은 모듈
// nodejs 프레임워크
// http 요청과 응답을 더쉽게 작성할수있도록 도와준다.
// 기본적인 기능만 포함하고있어ㅓㅅ.
// 자유도 높고 라우팅 미들웨어 등등 개발자가 워하는 방식으로
// 구성할수있따.
// 본인만의 보일러 플레이팅이 간으하다.
// 보일러 플레이팅은 반복적인 작업을 피할수있도록
// 미리 개발자가 작성을하고 개발의 생산성을 향상 시킬수있다.
// expresss 를 사용해보자 일단.

// 지금까지 진행한것
// 프로잭트 시작할때 팩 json 만들고시작하는게 편안하다.
// npm init -y 
// npm i mysql2
// 설치부터 받아 express 
// npm i express

const express= require("express");

// 서버 객체가 생성
const app = express();

// 메소드를 통해서 
// 요청의 내용이 get 메소드인지 post 메소드인지 나눈다. 
// app.post();



// 우리가 어제한내용 http 모듈이용해서 
// 익스프레스는 아래와같이 나눌필요가없다.
// http.createeServer((req,res)=>{
    
    // })
    
    
app.get('/',(req,res)=>{
    //send 메소드로 응답하고 종료
    res.send("hello nodejs ")
});

app.listen(5000,()=>{
    console.log("서버 열림~")
});


// package.json에 스크립트 명령어 작성

// "test": "echo \"Error: no test specified\" && exit 1",
// "start": "node index.js",
// "dev": "node index.js"

// start 명령어는 === npm start 