// function callbackFunc(callback) {
//     let vegetable = 'tomato';	// Local Variable
//     callback(vegetable);
// }

// function eat(vegetable) {
//     console.log(`fruit: ${fruit} / vegetable: ${vegetable}`);
// }

// callbackFunc(eat);

// <output></output>

//쿠키 세션 로컬 스토리지

// 쿠키 

function createCookie(name,value){
    // 현재 날짜와 시간 정보를 가지고있는 객체만들고
    let date = new Date();
    //10초 이후의 시간
    
    date.setTime(date.getTime()+10000)
    document.cookie = name + "="+ value +";expires="+date.toUTCString()+";path=/";

}

// createCookie("팝업",true);

//세션 
//사용자가 브라우저를 이용하는데 하나의 상태를 관여할때 사용
//로그인 서버쪽에서 세션 ID를 생성하고 프론트에서 세션에 id를 서버에서 받아서
//사용 node.js

//token 로그인 유지를 시키기위해서 세션 id를 사용해서 로그인이 유효한지 상태를 유지시키려는 개념
//로그인 상태가 맞는지 확인 

// 브라우저가 종료될때까지 유지된다.
// 클라이언트 쪽에서 구현
// 프론트에서 만들어보자
// setItem 메소드 매개변수(키 , 값 , )
sessionStorage.setItem('Token',"datecontent"); // 값을저장

//세션에 저장된 데이터를 호출
// getItem : 세션에 저장된 데이터를 호출 매개변수로는 키값을전달.
console.log(sessionStorage.getItem('Token'));

// 문서에 내용을 쓰기 추가할수있다.

document.write(sessionStorage.getItem('Token'));

// 세션의 길이 구하는법
sessionStorage.length;

console.log((sessionStorage.length));

//세션의 키를 인덱스로 호출
// key라는 메소드
console.log(sessionStorage.key(1));

//세션삭제
sessionStorage.clear();

//로컬스토리지 했는데

//로컬스토리지에 추가
window.localStorage.setItem("key","value");

//로컬스토리지 값을 호출
window.localStorage.getItem("key");

//로컬스토리지 값을제거 
window.localStorage.clear();

//로컬스토리지 길이
window.localStorage.length;

// 로컬스토리지 키값호출

window.localStorage.key(0);