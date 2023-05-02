// 내장모둘 http,fs

const http =require("http");
const fs = require("fs");

const server =http.createServer((req,res)=>{
    // createServer 메서드 서버 객체 만들고
    // 콜백함수의 매개변수로 req 요청내용을 가지고있는 객체
    // res 응답내용을 가지고있는 객체를 전달 받는다.
    
    // setHeader 응답 헤더내용설정
    res.setHeader("Content-Type","application/Json","charset=utf-8");

    const URL = req.url;
    // 요청한 url 확인하려고
    // 요청한 url이 파비콘이면 그냥무시
    if(URL === "./favicon/ico")
    {
        res.end();
        // end () 내용을 응답하고 종료하는 메서드
        // 응답을 안해주면 클라이언트는 요청을 하고 계속 기다림.
        return;
    }

    // 요청한 URL의 내용에따라서 응답을 해준다.

    switch (URL) {
        case "/":
            fs.readFile("./views/main.html",(err,data)=>{
                if(err){
                    // 파일을 못불러왔네?
                    // 404 파일을 불러오지 못했어
                    res.statusCode = 404;
                    res.end("파일 없어 ..ㅠㅜ");
                }else{
                    // 파일 잘가져왔네
                    res.statusCode = 200;
                    // 전달하는 컨텐츠의 내용은 html파일의 내용이야.
                    res.setHeader("Content-Type","text/html");
                    res.end(data);
                }
            })
            break;
        case "/list":
            fs.readFile("./views/list.html",(err,data)=>{
                if(err){
                    // 파일을 못불러왔네?
                    // 404 파일을 불러오지 못했어
                    res.statusCode = 404;
                    res.end("파일 없어 ..ㅠㅜ");
                }else{
                    // 파일 잘가져왔네
                    res.statusCode = 200;
                    // 전달하는 컨텐츠의 내용은 html파일의 내용이야.
                    res.setHeader("Content-Type","text/html");
                    res.end(data);
                }
            })
            break;
        case "/add":
            fs.readFile("./views/add.html",(err,data)=>{
                if(err){
                    // 파일을 못불러왔네?
                    // 404 파일을 불러오지 못했어
                    res.statusCode = 404;
                    res.end("파일 없어 ..ㅠㅜ");
                }else{
                    // 파일 잘가져왔네
                    res.statusCode = 200;
                    // 전달하는 컨텐츠의 내용은 html파일의 내용이야.
                    res.setHeader("Content-Type","text/html");
                    res.end(data);
                }
            })
            break;
        default:
            break;
    }
});


server.listen(4000,()=>{
    console.log("나 잘 열렸음 확인하려고 콜백함수 작성하는거임 없어도 됌");
})