
for(let i =1; i<10;i++)
{
    console.log(i);
    if(i%3==0){
    console.log("주말 잘쉬었니? 공부는 하셨나요??");
    }
}

//컴파일 언어와 인터프리터 언어
//개념


// 컴파일러 언어: 프로그램 코드를 컴파일해서 컴퓨터가 알아들을수있는
// 기꼐어로 번여갷준다. 소스코드 전체를 한번에 번역하고 실행파일을/
// 만들어서 실행해준다.
// 장점:파일의 크기가 큰데 실행속도가 빠르다.
// 실행하기 전에 전체코드를 번역해서 오류를 미리 알수있다.
// 대신 번역 과정 시간이 조금걸린다.
// c,c++ ,java,python

// 인터프리터 언어 : 프로그램 코드를 한줄씩 읽으면서 번역과 실행을 한다.
// 장점: 프로그램 실행 도중에 동적으로 소스코드를 수정해서 수정이 가능하다.
// 실행하는 크기가 작고 소스코드의 수정이 용이하다.그래서 디버깅이
// 하기가 편하다.
// 소스 코드가 실행될때마다 번역과 실행을 반복해서 속도는 좀 느리다.
// 오류를 실행중에 발견할수있다.
// javaScript 등등있다.

// 논리 연산자 ||,%% 
/* 
    || 논리합(or)

    a||b --> a나 b 둘중하나라도 참이면 참이다.
    0  0 --> fasle
    0  1 --> true 
    1  0 --> true
    1  1 --> true

    && 논리곱(AND)
    a && b -->둘다 참이어야함
    0    0 --> false
    01 false
    10 false
    11 true
*/
let a= true;
let b= false;
console.log(true||false); //true
console.log(false||false); // false
console.log(true||true); // true


let c = true;
let d = false;

console.log("cd"+ c && d);

let text="집에 가고싶다."
let age = 20;
if(text === "집에 가고싶다." && age === 20)
{
    console.log("집에도 가고 나이도 20이야");
}

// 상항연산자
// 한줄로 코드들을 표현할수있다. 잘쓰면 편한데 가독성이 많이 떨어진다.
// 본인도 읽기가 힘들수있다.
// 조건 ? (참일때 ) : (거짓일때)
console.log( 1>2? "참이야:": "거짓이야")
// 3번만 더 들어가도 작업물 지워버리고싶다.

// 조건문 if 반복 for 문이있었다.

// switch 조건문

// switch ("조건값") {
//     case 1: // if 부분 case 여러개 가능
//         //실행 시킬 문장
//         break;
//     case 2: // else if
//         break;
//     default: // else
//         break;
// }


let month = 11;
let monthName = "";
switch (month) {
    case 1:
        
        break;
    case 2:
        
        break;
    case 3:
        
        break;
    case 4:
        
        break;
    case 5:
        //여기가 동작되는 이유는 5case 부터 실행시키는데
        //break 문이 있기때문에 여기만 실행한거다
        //break 문이 없으면 5case에 들어와서 밑으로 break 가 나올때까지 실행
        // 없다면 default 가서 실행한다.

        
        break;
    case 11:
        monthName ="november"
        console.log("11월");
        break;

    default:
        // 나머지 13이상의 나머지
        console.log("응애");
        break;
    }

    switch (2) {
        case 1:
            console.log("1");
            //break;
        case 2:
            console.log("2");
            //break;
        case 3:
            console.log("3");
            //break;
    
        default:
            console.log("끝");
            break;
    }
    // 2번부터 쭉 다읽는다 2 3 끝

// while 반복문 무한히 돌아간다.
// while("값이 true이면 무한히 돌아간다. false로 값을 변경해주어야 반복문이 멈춘다."
// break 문으로 반복을 종료시켜줄수있다.
// while (true) {
//     if("멈추는 조건"){
//         break; // 조건이 맞았을때 반복을 끝내준다.
//     }
// }
    
// let num = 1;
// while(num!==5)
// {
//     console.log("num "+num);
//     num++;
// }

// let num2 = 1;
// while(true)
// {
//     console.log("num2 "+num2);
//     num2++;

//     if(num2===5)
//     {
//         break;
//     }
// }

// 사용자가 브라우저에 값을 간단히 입력받을 수 있는 상태창을 띄워준다.
// let value = prompt("자 값을 입력해보시오");
// console.log("value: ",+ value);
5
// let inputNum = prompt("첫번째 숫자입력");
// let inputNum2 = prompt("두번째 숫자입력");

// prompt 여기에 입력받은건 문자열이다..
// 숫자가 필요한데
// 숫자로 형태를 변환시켜주는 작업이 필요하다.
// 형태를 변환시켜주는 함수를 사용해야한다.;
// 이런걸 형변환
// parseInt("정수 숫자로 변경할 변수나 값");
// Nunber("위와 동일하다")
// 다른 형태의 type을 nunber 타입으로 형변환시킨다
// let result = parseInt(inputNum)+parseInt(inputNum2);

// console.log("결과는 :" +(result));

// let value = prompt("너는 숫자를 입력해야해 1~5사이의");
// value = parseInt(value);



// let play = true;
// while(play){
    
// switch (value) {
//     case 1:
//         console.log("1번 눌렀네 집에가");
//         play= false;
//         break;
//     case 2:
//         console.log("2번 눌렀네 집에가");
//         play= false;
//         break;
//     case 3:
//         console.log("3번 눌렀네 집에가");
//         play= false;
//         break;
//     case 4:
//         console.log("4번 눌렀네 집에가");
//         play= false;
//         break;
//     case 5:
//         console.log("5번 눌렀네 집에가");
//         play= false;
//         break;

//     default:
//         console.log("1~5사이 누르라고 ㅡㅡ")
//         value = prompt("너는 숫자를 입력해야해 1~5사이의");
//         value = parseInt(value);
//         break;
// }

// }

// 어렵다 연습해야겠다. 모두가 거쳐가는 연습

// 가위 바위 보 
// 3개중에 선택을할수있는데 컴터는 자동으로 어케 선택하지? 

// 자바스크립트에서 랜덤값을 구할수있는 친구
// Math.random(); // 0~1까지의 랜덤수
// //parseInt() 얘를 써서 정수 변환을 한뒤 값이 0~1로 너무 작으니
// // 곱해줘야한다. 예를 들어 0~100
// // 0을 가위ㅏ로 두어도 된다. *3이면 

// console.log(parseInt(Math.random()*99+1));
let value2 = prompt("가위 바위 보중 하나를 입력해");
// value2 = parseInt(value2);


rcp=["가위","바위","보"];
game=true;
computervalue = parseInt(Math.random() * 3);
let i=0;
while (game) {
    switch (value2) {
        case ("가위"):
            if (rcp[0] === rcp[computervalue]) {
                console.log("com:" +rcp[computervalue]);
                console.log("비김");
                game=false;
                break;
            } else if (rcp[computervalue] === "바위") {
                console.log("com:" +rcp[computervalue]);
                console.log("짐");
                game=false;
                break;
            } else if (rcp[computervalue] === "보") {
                console.log("com:" +rcp[computervalue]);
                console.log("이김");
                game=false;
                break;
            }
            break;

        case ("바위"):
            if (rcp[1] === rcp[computervalue]) {
                console.log("com:" +rcp[computervalue]);
                console.log("비김");
                game=false;
                break;
            } else if (rcp[computervalue] === "보") {
                console.log("com:" +rcp[computervalue]);
                console.log("짐");
                game=false;
                break;
            } else if (rcp[computervalue] === "가위") {
                console.log("com:" +rcp[computervalue]);
                console.log("이김");
                game=false;
                break;
            }
            break;

        case ("보"):
            if (rcp[2] === rcp[computervalue]) {
                console.log("com:" +rcp[computervalue]);
                console.log("비김");
                game=false;
                break;
            } else if (rcp[computervalue] === "가위") {
                console.log("com:" +rcp[computervalue]);
                console.log("짐");
                game=false;
                break;
            } else if (rcp[computervalue] === "바위") {
                console.log("com:" +rcp[computervalue]);
                console.log("이김");
                game=false;
                break;
            }
            break;


        default:
            console.log("가위 바위 보중 하나만 하라고")
            value2 = prompt("가위바위보중 하나를 입력해라고");
            break;
    }
    

}