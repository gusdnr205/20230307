// mysql에 연결 해볼거임 

// 외부모듈 설치 받아서 사용할것
// npm 모듈을 설치받는 방법

// 이번에 설치받아서 사용할 모듈은 mysql2 모듈을 설치받아서 사용할 예정

// mysql2 설치 명령어
// ----------------------------------------------------
// npm install mysql2
// npm i mysql
// ----------------------------------------------------

// 다른사람에게 줄때는 node_modules까지 주지않는다. 
// npm i mysql2 이것 설치한지 모른다 다른작업자가 .
// 프로젝트가 실행이 안될텐데..
// 우리는 일일이 npm i mysql2 이런식으로 설치를 받을 필요가 없이.
// package.json에 있는 dependencies 이 내용안의 모듈을 모듈을 다설칩다는법

// ----------------------------------------------------
// npm i만 치면된다.

// "dependencies": {
//     "mysql2": "^3.2.4"
//   }
// "^3.2.4" 이거 버전인건 알겠는데 왜 웃지? ^? 
// ^ 이게 왜있는가? 이 버전이 있는지 찾고 없으면 다른버전을 찾는다.
// 실질적으로 설치된버전은 lock.json에 들어있다.

// mysql 모듈도있다. 근데 왜 mysql2를 사용하는가? 이둘의 차이점
// mysql 모듈은 콜백기반으로 promise기반으로 사용하기가 힘듬.. 그래서
// mysql2를 사용할거고 . mysql2가 promise 기반을 지원하기때문에 사용하기 편하다.
// mysql2 사용하라고 공식문서에서도 권장을함.

// mysql2 모듈가져오기
const mysql= require("mysql2");

// mysql을연결해보자 
// createConnection 메서드로 연결시켜준다.
// 매개변수로 연결하는 mysql의 옵션을 전달해줘야한다. 
// host : 연결할 호스트를 나타냄 root 
// port : 연결할 포트 3306포트에 기본적으로 열림 
// user : 사용자의 이름
// password : 사용자 비밀번호 
// database : 어떤 데이터 베이스를 연결 시킬건지
const temp = mysql.createConnection({
    user : "root",
    password : "gusdnr2ekt",
    database : "test1"


});

// temp에 연결한 mysql 객체를 반환
// 이 객체안에는 쿼리문을 작성해서 데이터베이스 쿼리작업을 시켜줄수있는 메서드가있다.

// query 메서드 : 쿼리문을 매개변수로 전달해서 데이터베이스의 쿼리작업을 시킬수 있다.
// "SLECT * FROM products" : products table이 있는지 먼저 확인 값을 가져온다. 콜백함수의 두번째 매개변수로
temp.query("SELECT * FROM products",(err,res)=>{
    if(err){
        //테이블이 없다는얘기
        console.log("테이블이 없어~");
        // const sql="CREATE TABLE products(id INT AUTO_INCREMENT PRIMARY KEY,name VARCHAR(20),number VARCHAR(20),series VARCHAR(20))";
        // 쿼리문의 내용
        // products 이름의 테이블을 만드는데
        // id 컬럼은 INT 숫자형
        // AUTO_INCREMENT : 자동으로 값이 증가할수있도록 설정 PRIMARY KEY 고유키에 주로 사용 얘만 사용할수있음 1,2,3,4 ...부여
        // PRIMARY KEY : 테이블에는 고유한 값을 가지고있는 컬럼 하나 무조건 피룡한데 고유한 값을 설정한는데 PRIMARY KEY로 설정한다. 
        // name,number,series VARCHAR 문자열이고 ()괄호안에 글자 수를 정해줄수있다. 
        // temp.query(sql);
        console.log("table이 없어서 만들었어~");
    }
    else{
        console.log(res);
        console.log("테이블이 있어~");
    }

});