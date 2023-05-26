//웹 소켓
//웹소켓을 사용하는 이유
// 양방항 통신을 위해
// 단방향으로 요청 응답을 받는 구조고
// 서버에서 데이터르푸수하는경우

// 웹소켓의 장점
// 헤더의 값이 같이 넘어가는데
// 한번연결할때 헤더값을 전송하기때문에 오버헫
// 많은 데이터가 전송이되지않는다.

// 실시간으로 채팅을 구현하거나 실시간으로 해야하는 작업이 있을경우 사용

// 사항화폐 거래소같은경우 데이터 전송이 자주일어나는 경우
// 웹소켓을 사용해서 구현하는게 좋다.

//효유적인 데이터 통신
// soket.io 라는 라이브러리를 사용해보자

// 페이지에서 덧글을 달았다고 가정했을때 
// 페이지를 새로고침해야 글이 다시 보이는 현상같은
// 웹소켓으로 양방향 통신을 이용해서 실시간으로 글이보이게 처리를 할수있다.

// express soket.io ejs

const express = require("express");
const soket = require("soket.io");
const app = express();
const path= require("path");

app.set("views",path.join(__dirname,"page"))
app.set("views","ejs");


app.get('/',(req,res)=>{
    res.render("main");
})
app.listen(4000, ()=>{
    console.log("잘열림")
})