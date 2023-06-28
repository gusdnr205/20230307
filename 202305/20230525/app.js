const express =require("express");
const app =express();
const path = require("path");
const socketio=require("socket.io");


app.set("views",path.join(__dirname,"page"));
app.set("view engine","ejs");

const server=app.listen(8000,()=>{
    console.log("서버온")
})


app.get('/',(req,res)=>{
    res.render("main");
})

let userid=[];
let username=[];

const io=socketio(server);

io.on("connection",(socket)=>{
    //유저가 접속시
    console.log("유저 접속");
    userid.push(socket.id);
    console.log(socket.id);
    console.log(userid);
    
    // 고유식별자를 가진 socket가 userw 이벤트를 입력받았을때 name을 배열 username안에 저장한다. 그리고 다시 서버는
    // 클라이언트 이벤트 userw로 username userid 배열을 반환해준다. 
    socket.on("userw",(name)=>{
        username.push(name);
        io.sockets.emit("userw",username,userid);
    })
    socket.on("joinroom",(room,name)=>{
        //방에 접속하면 
        //join 메서드로 방에 입장시킨다.
        // 방의개념
        socket.join(room);
        // 현재 방에있는 클라이언트에게 이벤트 푸쉬
        // 어느방에 누구 접속했는지
        io.to(room).emit("joinroom",room,name);
    })
    socket.on("leaveroom",(room,name)=>{
        //유저가 방에서 나가면
        // 유저가 방에서 제외되게해주고
        socket.leave(room);
        // 어느방에서 누가 나갔는지 해당방에있는 유저들에게 이벤트 푸쉬
        io.to(room).emit("leaveroom",room,name);
    })
    socket.on("disconnect",()=>{
        console.log("유저나감");
        userid=userid.filter((value)=> value!=socket.id);
        console.log(userid);

        
    })
    socket.on("chat",(room,name,msg)=>{
        io.to(room).emit("chat",name,msg);
    })
    socket.on("chat2",(room,name,msg)=>{
        io.to(room).emit("chat",name,"귓속말:"+msg)
    })
    

})
