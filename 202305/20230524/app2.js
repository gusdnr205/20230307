const express = require("express");
const socketio = require("socket.io");
const app = express();
const path= require("path");
const { Socket } = require("dgram");

app.set("views",path.join(__dirname,"page"))
app.set("views","ejs");


app.get('/',(req,res)=>{
    res.render("main");
})
const server=app.listen(8000, ()=>{
    console.log("잘열림")
})

//socket 객체 생성
const io= socketio(server);

app.get('/',(req,res)=>{
    res.render("main2");
})

io.sockets.on("connections", (sockets)=>{
    socketio.on("message",(data)=>{
        // 메시지 이벤트가 들어오면 모든 클라이언트들에게 다시 메시지 이벤트 푸쉬
        // 모든 클라이언트에게 이벤트 푸쉬
        io.sockets.emit("message",data);
    })
})