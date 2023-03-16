// 콜백함수
// 함수도 값이라고했는데

// 함수의 매개변수로 함수를 전달해서 
//내가힘수의코드작성하다가 필요한 순간에 매개변수로 받은 함수를 실행시킨다.
// 원하는 순간에 실행시키는게 핵심

function test(){
    console.log("1번작업끝");
    console.log("2번작업끝");
    if(true){
        // callback();
    }
}

function test2(){
    console.log("나는 콜백함수야 ");
}

test(test2);


let arr=[1,2,3,4];
arr.map(function(i,v){
    console.log(i);
    console.log("인덱스 :"+v);
}) 

//배열 메소드 map을 좀 흉내내보자
//우리가 만든 객체
let arr2={
    map : function(callback){
        //함수의 매개변수 갯수 알수있다.
        // 그함수에 매개변수가 몇개들어가나?
        // 매개변수 안받는 함수인데 매개변수 전달하면 터짐
        if(callback.length == 1)
        {
            let a=2;
            console.log("난 map함수야 나는 매개변수를 한개받았어."+a+"결과야")
            callback(a);
        }else if (callback.length ==2)
        {
            let a=2;
            let b=3;
            console.log("나는 map함수야 내가 받은 콜백함수에는 매개변수 두개를 넣는다고 전달받았어");
            callback(a,b);
            
        }else{

        }
    }
}

arr2.map(function(a,b){
    console.log("나는! 콟백함수야 전달받은 매개변수는 ",a,",",b," 이거야",true);
    //,은 타입까지 유지시켜주는것이다

    
}
);


// function temp(callback)
// {
//     if(callback.length===0){
//         callback();
      
//     }else if(callback.length===1){  
//         let temp="사과"
//         callback(temp);

//     }else if(callback.length ===2){
//         let temp="사과"
//         let temp2="포도";
//         callback(temp,temp2);


//     }else{
//         console.log("매개 변수 초과야 난 두개만 받을수있어.")
//     }
// }

// function temp2(v,b){
//     console.log("난 콜백함수야 ",v+" 를받았어",b+"도받았어");
// }

// temp(temp2);

//메소드 
// function 함수명: 일밤함수
// 메소드 : 객체 안에 있는 함수
// 객체 안에 함수를 만들고 콜백함수를 만들면된다.
// 키값은 원하는데로 이름지정해도 괜찮고
// 매개변수 3개 까지 받을수 있는 함수를 만드는데
// 연습겸 하나 더 전달받은 콜백함수는 구구단을 보여준다.
// 매개 변수 하나 이면 1개 2단 2개 받으면 2,3단 보여주고
// 3개 받으면 2,3,4단 다보여주면됩니다.

let obj ={

    a: function(callback){
        if(callback.length===1)
        {
            for(let i =0;i<callback.length;i++)
            {
                console.log("ahah");
            }
            callback();

        }else if (callback.length===2)
        {
            callback();

        }else if (callback.length===3)
        {

        }

    }
}

// obj.a(function(i){
//     console.log()
//     for(let n=1;n<=9;n++){
//         console.log(2+"x"+n+" "+2*n);
//     }


// },2

// )
function temp4(){

}

obj.a(
temp4
);




let ovj2 ={
    gugu: function(callback){
        switch(callback.length){
            case 1:
                callback(2);
                break;
        
            case 2:
                callback(2);
                callback(3);
                break;
        
            case 3:
                callback(2);
                callback(3);
                callback(4);
                break;
        
            default:
                break;
        
        }
    }
}

function temp3(a,b){
    for(let i =1; i<10;i++)
    {
        console.log(`${a} x ${i} = ${a*i}`);
    }
}

ovj2.gugu(temp3);

// 콜백 중요하니까 오늘 정리해놓고 연습 공부 해야한다.

// 함수가 실행되면 스택이라는 곳에 쌓인다고 했는데

// 스택 : last in first out 후입선출 
// 큐 : first in first out 선입선출

// 콜 스택 개념을 알아보자
// 스택은 데이터를 사용하기위해서 잠시저장해놓는것
// 데이터들을 쌓아놓는다 보면된다.
// 후입선출 마지막에 추가된 데이터부터 제거
// 우리가 이사를 가는데 상자에 짐을넣어놓고 위에서 부터 짐을 꺼내는 형태처럼 보면된다.
// 함수 실행 컨텍스트 함수를 실행하게되면 스택에 추가가되고 반환될때 스택에서 제거된다.
// 함수 실행 컨텍스트 : 함수가 실행 될때마다 생성된다. 함수의 실행정보를 가지고있다.
// 콜 스택은 함수가 실행되면 실행컨텍스트 저장하는 스택의 구조
// 콜 스택은  컴퓨터의 메모리 크기나 운영체제에 따라 크기가 다르다.
// 콜 스택이 쌓이게 되면 크기가 초과하면 스택 오버플로우가 발생한다.에러 발생 더이상 실행 할수가없어 
// 에) 함수를 무한으로 실행할시 나올수있다 

// 함수를 만들어보자 
function fun1(){
    fun2();    
}

function fun2(){
    fun3();
}   

function fun3(){
    console.log("난 3번 마지막 실행함수야.")
    // fun1();
}

fun1();

// 자바스크립트 코드 전체를 실행하고 전역실행 컨텍스트가실행되고
// fun1 함수 실행 구문에서 함수의 실행컨첵스트가 생성 -> 
// fun2 함수 실행 컨텍스트 생성
// -> fum3 실행 컨텍스트 생성
// 이렇게 스택에 쌓이고
// 마지막에 추가된 fun3 함수의 실행 컨텍스트 제거 ->fun2 함수의 실행컨텍스트제거
// -> fun1함수의 실행컨텍스트 제거
// 끝


//확인하는 방법 : 브라우저 개발자 모드 열고 f12 디버깅모드 활성화(ctil f8)
//함수나 코드줄의 옆에 왼쪽에 코드줄 번호에 클릭을 하면 브레이크 포인트가 찍히는데
// 포인트를 찍으면 코드가 실행되다가 그포인트에 도달하면 잠시 실행을 멈춘다.
// 재생 버튼을 누르면 다음 포인트가 있는곳까지 실행하다 또 멈춘다.
// 작업의 디버깅도 용이하다.


//정리 잘해야하고


//화살표 함수라는게 있어.. 화살표
//function 함수명(){}
//함수명 한글 x 정상작동은 가능하지만 예측 불가능한 문제 생길수있다.

// 화살표 함수
// ES6에 새로 나온 함수의 방식
// ES6 탬플릿 리터럴

// 우리가 사용하던 일반함수의 모양과 다르게 생겼다.
// => 화살표 모양으로 함수를 선언한다.
// 선언 방식
let temp5 = () => {
    console.log("난 화살표 함수야.")
}

// 함수 실행
temp5();

// 화살표 함수는 일반함수와 차이들이 있는데
// 함수에서 값을 반활할때 return식을 사용해서 반환해쓴데
// return식 없이도 반환시킬수있다.
// () 함수와 똑같이 이안에 매개변수가 들어간다.
let temp6 = ()=>3+5;

let ab= temp6();
console.log(ab);

//연결된 개념을 좀 설명

// 제일 중요하고 큰차이점 면접에서 질문으로 나올수있다.
// this라는 개념
// this 키워드 : 자바스크립트 객체를 참조하는 특별한 구문
// 일반함수와 화살표 함수의 큰차이는 this의 차이 this가 기르키는 대상이다르다
// 일반함수는 this: 
//함수가 실행될대 위치(scope 스코프)에서 this를 가지고온다. (다이나믹 스코프) 
// 화살표 함수의 this: 화살표 함수 내부의 this는 화살표 함수를 
// 선언한 위치에서 this를 가지고온다.(렉시컬 스코프)

let obj6 = {
    a:function(){
        b();
        console.log(this);
        let c=()=>{
            console.log(this);
        }
        c();
    }
}
function b(){
    console.log(this);
}

obj6.a();
let d =() =>{
    console.log(this);
}
//화살표함수는 선언된곳에서 this를 찾는다.
//‘고유한’ this를 가지지 않습니다. 
//일반함수는 호출된곳
d();

// 전역공간에서 this를 쓰면?
// console.log(this);
// window객체
// BOM(브라우저 오브젝트 모델) : 브라우저를 객체 모델로 표현한것
// BOM은 브라우저의 기능들을 접근할수있는 객체
// window객체

// 비동기 함수
// 동기 함수

// 동기 함수 순차적으로 실행
// 실행되는것과 별개로 또 돌아간다 동시에

// 동기: 순차적으로 실행된다. 작업이 끝나고 다음작업 진행 끝나고 다음작업진행
// 비동기: 다른코드들과 함께 동기적으로 실행되지않아요. 순차적 실행x 작업을하는 도중에도 다른작업이 가능하다.
// nodejs들어갔을때 더 잡힐것이다. 예) 서버에서 값을 가져오는 동안 페이지가
// 멈춰있지 않고  다른작업들은 정상적으로 돌아간다
// (서버에서 값을가져온느 작업이비동기)(페이지 돌아가는게 동기)


// 비동기 함수는 뭐가 있을까?
// setTimeout 비동기 함수고 매개변수를 두개받고 첫번째 매개 변수가 함수고
// 두번째는 시간값을 숫자타입으로 넘겨주면된다.
// 1000 = 1초
setTimeout(function(){
    console.log("나는 3초뒤에 실행되고 나는 비동기 함수에서 실행됐어");
}, 3000);

console.log("난 동기임 ㅎ");

// 오늘정말 정리 잘해야한다.


//let var const 꼭 써야한다.
// window객체

let a= "";
function temp7(){
    let b= "";
    c="aa";
}
temp7();
// window 객체의 키값으로 추가된다.
// 이러면 큰일나고 찾을수가없다.
console.log(window.c);
console.log(c); //전역변수가 되는데 선언도 된다. 

console.log(b);



let user= {name:"John"}

function sayHi(){
    alert(this.name);
}

user.f=sayHi;

user.f();