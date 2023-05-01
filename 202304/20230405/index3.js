// 즉시 실행함수 작성법
// 즉시실행함수를 사용하는 이유는 
// 한번 실행시키고 사용 하지않을것같은변수나 코드를 즉시실행
// 함수를 만들고 호출하는 방식( 변수나 함수명이 겹치지지않게 충돌하지않게 )

// 즉시 실행 함수 작성

// 즉시 실행함수
// 전역에 괄호() 하나 들어간것.
// // 맨뒤에 () 함수 실행식
// // 맨두의 실행식 괄호에 매개변수를 전달하면 된다. 
// (function("매개변수로 사용할이름"){
//     console.log("즉시 실행 함수");
//     let a=5;
// }("전달할 매개변수 "));


// console.log(a);




(function (b){

    (function(c){
        console.log("즉시 실행 함수");
        let a=5;
        console.log(c);
        console.log(a);
    }("dd"));
    console.log(b);
}("안기무씨"));

function temp(b){
    console.log(b);
}
temp("ㅇㅇ");
