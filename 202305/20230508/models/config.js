const mysql2 = require('mysql2/promise');

// 우리가 전에 사용했던 create connections 메서드는 콜백함수기반이고
// pormise를 반환하지않았다.
//create connections : 기본적인 견결을 해주는 메서드 테스트 할때 사용한다. 단일 클라이언트 접속에용이

// 커넥션 풀을 생성하고 관리할수있는 메서드 
// createPool 메서드로 연결을 관리할것.
// promise객체를 반환해준다.
// 많은 클라이언ㄴ트가 데이터베이스와 통신할때 
// 요청이 많이들어와도 성능이 유지되고 여러개의 요청을 처리하는데 좋다.
// 쉽게 말해서 여러명이 동시에 요청해도 성능이 유지된다.

const mysql = mysql2.createPool({
    user : "root",
    password : "gusdnr2ekt",
    database : "test9",
    // 다중 쿼리문 사용할수 있는 옵션
    // multipleStatements : true,
    host : "127.0.0.1",
    multipleStatements : true
})

module.exports = mysql;

// 연결확인 메서드
mysql.getConnection((err,res)=>{
    //연결이 정상적으로 되지않으면
    console.log(err);
    // 정상적으로 연결되면 res가 넘어온다,

})