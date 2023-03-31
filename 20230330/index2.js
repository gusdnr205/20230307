// 재귀함수
// 함수가 함수 자신을 호출하는 함수 

// 쓸일은 그렇게 많지않은데 
// 알고리즘 문제 풀대 가끔사용한다.
function add(){
    add();
}

// 임시로 데이터베이스에 추가할때라던지 사용할수있다.

function add(n){
    // 얼마나 반복실행 시킬건지
    if (n<5)
    {
        add(n+1);
        console.log(n);
    }
}

add(0);
// console 이전에 계속 함수 실행되기때문에 역순으로 나온다
// 함수의 실행 컨텍스트
// add-> add2-> add3-> add4
// add4 -> 실행이 끝나고 -> add3-> 실행이 끝나고->
// add2  -> 실행이 끝나고 -> add 실행끝

// 함수가 호출되면서 실행컨텍스트가 생성되고
// 함수의 안에서 함수가 호출되면서 컨텍스트가 쌓이고
// 뒤에서부터 실행하고 실행컨텍스트 제거 

// 실행컨텍스트 중요!

// 재귀함수 좀더 써보자
//피보나치 수열 재귀로
// 피보나치 수열 
// 황금비 연속된 두항의 비율
// 0 1 1 2 3 5 8
// 이전 두항의 합으로 만들어진 수열
// 재귀 함수를 사용해서 피보나치 수열을 만들었다.
let a,b=1;
function fibonacci(n){
    if(n<2) return n;
    // 이전두항을 더해서 반환
    return fibonacci(n-1)+fibonacci(n-2);
}
for (let i = 0; i < 20; i++) {
    console.log(fibonacci(i));
    
}