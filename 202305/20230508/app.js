// 게시판을 만들었는데 
// mvc패턴으로 만들어보려고 한다.
// 많이 사용하고 표준 기본적인 디자인 패턴
// 유지보수와 확장성을 고려해서 개발할수있다. 
// 협업간의 코드의 표준화도 용이하다.

// mvc 패턴은 model - view - contorller 

// model : 데이터를 다루는 로직 
// 글선택 글 작성 등등의 기능들 어플리케이션의 동작을 관리 하는 폴더

// view : 사용자가 볼수있는 화면의 데이터를 표시해주는 역할 

//controller : model과 view의 사이에서 동작을 제어해주는 역활
//model의 상태를 가지고 view에 반영 시켜주는것

// 이런 패턴으로 작업을 하면 유지보수와 코드의 표준화를 유지할수있다.

// package.json
// node init 
// 기본값으로 설정해서 만들어보자
// npm init -y
// 인데 난 한폴더안에 더선언하기때문에 다시 만들어줄 필요가 없다.

// express까지만들기
// express 설치
// npm i express

// package-json 받아온 상태면 npm i 로 다설치가능하다.
// 서버 인스턴스 생성하고 대기상태로만들자

// ejs 설치받자
// npm i ejs 

// mysql2 역시 설치

// 한번에 설치하려면  npm i express ejs

const express = require("express");
const postRoute = require("./routes/post");
const ejs = require("ejs");
const path = require("path");
const mysql = require("mysql2");
const exp = require("constants");
let app;
const PORT = 8000;

app=express();

// view 엔진으로 보여줄 파일들의 경로 설정
app.set("views",path.join(__dirname,"page"));
// view 엔진으로는 ejs 사용할예정 
app.set("view engine","ejs");

//body 객체 사용하기위해 미들웨어 에서 추가
// 깊은 객체 사용할지? 안할지 extended: false === 사용안함, 사용할일이 별로업다. 
app.use(express.urlencoded({extended:false}));

// 정적인 파일을 사용하기위해 미들웨어 추가
// 정적인 파일을 모아놓은 경로를 지정 public 폴더로 지정
// 앞에 매개변수로 경로를 지정하지않았을 경우에는 기본적으로 / 루트경로로 지정한다. 
app.use(express.static(path.join(__dirname,"public")));
// 이렇게 지정한 경우네는 ejs 단에 /css/파일명으로 접근을 하면된다.
// 정적 파일경로도 나눌수있다.
// app.use("/css",express.static(path.join(__dirname,"public")));

//post Route 객체에 get 메서드로 / 루트경로 지정했을때
// "/posts " 이 경로도 추가되어서 라우팅된다.
//  /posts 붙어야 루트경로로 요청이된다.
// 해야 메인페이지로 간다.
app.use("/posts",postRoute);



app.listen(PORT,()=>{
    console.log("서버 잘 열림");
})