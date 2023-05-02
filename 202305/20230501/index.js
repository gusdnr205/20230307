// HTTP 프로토콜
// 우리가 브라우저에서 url을 입력하고 엔터를 누르면 

// HTTP 요청을 보내게 되는데
// TCP 3-way handshaking 과정을 거친다.

// TCP 3-way handshaking : 클라이언트와 서버가 데이터 통신을하기전에 
// 통신 준비가되었다는것을 확인하는 것. 

// 클라이언트가 서버에 연결 요청을 하고
// 서브는 연결요청을 받아서 클라이언트에게 연결 요청 수락을 응답해요 
// 클라이언트는 서버로부터 수락 확인을 보내면 연결이 된다.
// syn(synchronize sequence number), ack(acknowledgement)

//-------------------------------------------------연결과정
// 클라이언트가 SYN을 서버에 요청하고
// 서버는 syn + ack 를 클라이언트에 연결 요청을 수락을 응답한다.
// 클라이언트가 서버에 ACK를 보내면 연결이된다.

//-------------------------------------------------연결중
// 서버에 요청과 응답을 한다.
// 클라이언트가 요청을 보내면 서버가 응답을 하고 

//-------------------------------------------------종료과정
// 4 way-handshake tcp 연결을 종료 수행하는것 . 
// 연결을 종료하기위해 클라이언트와 서버의 상태를 서로 확인한다. 
// 서버가 FIN 메시지를 받고 
// 클라이언트는 데이터가 없다는것을 의미하는 메시지인 ACK를 보내고 
// 서버는 데이터가 더 없으면 자신이 보내지지 않은 데이터를 확인하고
// 전송한후 클라이언트에게 FIN 메시지 전송 클라이언트는 서버가 
// 더이상 전송할 데이터가 없는것을 확인하는 ACK메시지를 보낸다. 
// 클라이언트와 서버의 연결이 종료되는것.

// HTTP 프로토콜을 사용해서 네트워크 통신을 수행하는 모듈을 가지고 웹서버
// 개발을 해보자~

// 요청과 응답을 처리하는 기능을 제공하는 모듈
// 내장모듈 http 모듈 
const http = require("http");
const { url } = require("inspector");
// req 요청 res 응답 을담고있는 객체
const server = http.createServer((req, res) => {
    // createServer 메서드로 서버 객체를 만들어준다. 매개변수로 전달되는 콜백함수에는
    // 매개변수로 req ,res 를 전달해준다.

    // 콜백 함수의 첫번째 매개변수
    // req : http 요청의 정보 URL, 메소드 (GET,POST 등) 요청 헤더 정보, 바디의 내용이있다.

    // 콜백 함수의 두번째 매개변수
    // res : http 응답의 정보를 가지고있는 객체 상태코드는 statusCode 응답 헤더 , 바디의 내용이있다.

    // statusCode 200 == 성공
    res.statusCode = 200; // 응답에대한 객체에다가 상태코드 200 을 부여한것

    // setHeader 응답 헤더의 내용을 설정할수있다.
    res.setHeader("Content-type", "application/json", "charset=utf-8");
    // Content-tpye : 응답의 내용
    // application/json : 응답의 내용을 JSON 형식의 데이터로 전송 
    // charset=utf-8 : 응답의 문자를 인코딩 UTF-8로 설정
    const URL = req.url;
    console.log(URL);
    // req.end("dd");
    // / : main 페이지의 경로
    // /list : 글의 목록 페이지 혹은 게시판
    // /add : 글을 추가하는 페이지 

    // 내용을 응답하고 종료하는 메서드
    // 응답하는 내용은 매개변수로 전달 하면 된다.

    // /favicon.ico은 브라우저의 요청이 들어가면 자동으로 같이 들어감 이것은 브라우저의 지구모양아이콘이다.
    if (URL === "/favicon.ico") {
        res.end();
        return;
    }
    // res.end("나 응답했음");
    switch (URL) {
        case "/":
            res.end("main page");
            break;
        case "/list":
            res.end("list page");
            break;
        case "/add":
            res.end("add page")
            break;
        default:
            break;
    }
    console.log(URL);
})

// listen 메서드 첫번째 매개변수 PORT 를주고 서버를 대기상태로 만들어놓자.
const PORT = 4000;
server.listen(PORT, () => {
    console.log("서버 잘열렸음")
})