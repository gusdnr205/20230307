
// for (let i = 1; i < 10; i++) {
//     console.log(i);
//     if (i % 3 == 0) {
//         console.log("주말 잘쉬었니? 공부는 하셨나요??");
//     }
// }

// //컴파일 언어와 인터프리터 언어
// //개념


// // 컴파일러 언어: 프로그램 코드를 컴파일해서 컴퓨터가 알아들을수있는
// // 기꼐어로 번여갷준다. 소스코드 전체를 한번에 번역하고 실행파일을/
// // 만들어서 실행해준다.
// // 장점:파일의 크기가 큰데 실행속도가 빠르다.
// // 실행하기 전에 전체코드를 번역해서 오류를 미리 알수있다.
// // 대신 번역 과정 시간이 조금걸린다.
// // c,c++ ,java,python

// // 인터프리터 언어 : 프로그램 코드를 한줄씩 읽으면서 번역과 실행을 한다.
// // 장점: 프로그램 실행 도중에 동적으로 소스코드를 수정해서 수정이 가능하다.
// // 실행하는 크기가 작고 소스코드의 수정이 용이하다.그래서 디버깅이
// // 하기가 편하다.
// // 소스 코드가 실행될때마다 번역과 실행을 반복해서 속도는 좀 느리다.
// // 오류를 실행중에 발견할수있다.
// // javaScript 등등있다.

// // 논리 연산자 ||,%% 
// /* 
//     || 논리합(or)

//     a||b --> a나 b 둘중하나라도 참이면 참이다.
//     0  0 --> fasle
//     0  1 --> true 
//     1  0 --> true
//     1  1 --> true

//     && 논리곱(AND)
//     a && b -->둘다 참이어야함
//     0    0 --> false
//     01 false
//     10 false
//     11 true
// */
// let a = true;
// let b = false;
// console.log(true || false); //true
// console.log(false || false); // false
// console.log(true || true); // true


// let c = true;
// let d = false;

// console.log("cd" + c && d);

// let text = "집에 가고싶다."
// let age = 20;
// if (text === "집에 가고싶다." && age === 20) {
//     console.log("집에도 가고 나이도 20이야");
// }

// // 상항연산자
// // 한줄로 코드들을 표현할수있다. 잘쓰면 편한데 가독성이 많이 떨어진다.
// // 본인도 읽기가 힘들수있다.
// // 조건 ? (참일때 ) : (거짓일때)
// console.log(1 > 2 ? "참이야:" : "거짓이야")
// // 3번만 더 들어가도 작업물 지워버리고싶다.

// // 조건문 if 반복 for 문이있었다.

// // switch 조건문

// // switch ("조건값") {
// //     case 1: // if 부분 case 여러개 가능
// //         //실행 시킬 문장
// //         break;
// //     case 2: // else if
// //         break;
// //     default: // else
// //         break;
// // }


// let month = 11;
// let monthName = "";
// switch (month) {
//     case 1:

//         break;
//     case 2:

//         break;
//     case 3:

//         break;
//     case 4:

//         break;
//     case 5:
//         //여기가 동작되는 이유는 5case 부터 실행시키는데
//         //break 문이 있기때문에 여기만 실행한거다
//         //break 문이 없으면 5case에 들어와서 밑으로 break 가 나올때까지 실행
//         // 없다면 default 가서 실행한다.


//         break;
//     case 11:
//         monthName = "november"
//         console.log("11월");
//         break;

//     default:
//         // 나머지 13이상의 나머지
//         console.log("응애");
//         break;
// }

// switch (2) {
//     case 1:
//         console.log("1");
//     //break;
//     case 2:
//         console.log("2");
//     //break;
//     case 3:
//         console.log("3");
//     //break;

//     default:
//         console.log("끝");
//         break;

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

// 1. 가위바위보 게임을 20판  게임시작 전 돈걸고 시작 
// 2000원이상으로 걸수있게 이상아니면 다시입력
// -> 배팅금액 2만원 들고시작 
// 2. 가위바위보 후 묵찌빠 -> 이기면 배팅한 금액의 *2로 판돈
// 지면 마이너스 배팅한 금액의 *2
// 종료조건 20판 다 끝나면 or 돈다 잃었을때
// 소지금이랑 몇판했는지 알려주기

let account = 0;
let value2 = "가위";
// value2 = parseInt(value2);
let bet = 0;
let bet2 = true;
let rcp = ["가위", "바위", "보"];
let game = true;
let computervalue = parseInt(Math.random() * 3);
account = 20000;
let judge = true;
let i = 0;
let controlbit = [0];

let depth = 0;

while (i < 21) {
    i++;
    depth = 0;
    alert(i + "번째 게임")
    alert(`${account}당신의 남은금액`);
    alert("게임시작전 배팅금액을 설정해주십시오 최소2000이상");
    bet = prompt("금액입력:");
    bet = parseInt(bet);
    bet2 = true;
    while (bet2) {
        if (bet < 2000) {
            alert("배팅금액을 다시입력^^");
            bet = prompt("금액입력:");
            bet = parseInt(bet);
        } else if (bet >= 2000) {
            account = account - bet;
            bet2 = false;
            break;
        }
    }
    alert(`${account}당신의 남은금액입니당`);
    value2 = prompt("가위 바위 보중 하나를 입력해주세용");

    while (game) {
        depth++;
        alert(depth);
        switch (value2) {
            case ("가위"):
                if (value2 === rcp[computervalue] && depth === 1) {
                    alert("나는 " + value2);
                    alert("com: " + rcp[computervalue]);
                    alert("비김");
                    judge = false;
                    game = false;
                    break;
                }
                if (value2 === rcp[computervalue] && depth > 1) {
                    alert("나는 " + value2);
                    alert("com: " + rcp[computervalue]);
                    if (controlbit[0] == 2) { alert("컴퓨터승"); }
                    if (controlbit[0] == 1) { alert("내가 이겼따!"); }
                    judge = false;
                    game = false;
                    break;
                }
                while (judge) {
                    if (rcp[computervalue] === "바위") {
                        alert("com:" + rcp[computervalue]);
                        alert("내가 짐");
                        alert("컴퓨터의 선공입니다. 컴퓨터가 뭘낼지 결정중입니다.");
                        controlbit[0] = 2;
                        computervalue = parseInt(Math.random() * 3);
                        value2 = prompt("당신이 뭘낼지 결정하십시오");
                        judge = false;
                        break;
                    }
                    else if (rcp[computervalue] === "보") {
                        alert("com:" + rcp[computervalue]);
                        alert("내가 이김");
                        controlbit[0] = 1;
                        alert("당신의 선공입니다. 당신이 뭘낼지 결정하십시오");
                        value2 = prompt();
                        alert("컴퓨터가 뭘낼지 결정중입니다.")
                        computervalue = parseInt(Math.random() * 3);
                        judge = false;
                        break;
                    }
                    if (value2 !== "가위") {
                        judge = false;
                    }
                }
                judge = true;
                break;
            case ("바위"):
                if (value2 === rcp[computervalue] && depth === 1) {
                    alert("나는 " + value2);
                    alert("com:" + rcp[computervalue]);
                    alert("비김");
                    judge = false;
                    game = false;
                    break;
                }
                if (value2 === rcp[computervalue] && depth > 1) {
                    alert("나는 " + value2);
                    alert("com: " + rcp[computervalue]);
                    if (controlbit[0] == 2) { alert("컴퓨터승"); }
                    if (controlbit[0] == 1) { alert("내가 이겼따!"); }
                    judge = false;
                    game = false;
                    break;
                }

                while (judge) {
                    if (rcp[computervalue] === "보") {
                        alert("com:" + rcp[computervalue]);
                        alert("내가 짐2");
                        controlbit[0] = 2;
                        alert("컴퓨터의 선공입니다. 컴퓨터가 뭘낼지 결정중입니다.");
                        computervalue = parseInt(Math.random() * 3);
                        value2 = prompt("당신이 뭘낼지 결정하십시오");
                        judge = false;
                        break;

                    } else if (rcp[computervalue] === "가위") {
                        alert("com:" + rcp[computervalue]);
                        alert("내가 이김2");
                        controlbit[0] = 1;
                        alert("당신의 선공입니다. 당신이 뭘낼지 결정하십시오");
                        value2 = prompt();
                        alert("컴퓨터가 뭘낼지 결정중입니다.")
                        computervalue = parseInt(Math.random() * 3);
                        judge = false;
                        break;
                    }
                    if (value2 !== "바위") {
                        judge = false;
                        break;
                    }
                }

                judge = true;
                break;
            case ("보"):
                if (value2 === rcp[computervalue] && depth === 1) {
                    alert("com:" + rcp[computervalue]);
                    alert("비김");
                    judge = false;
                    game = false;
                    break;
                }
                if (value2 === rcp[computervalue] && depth > 1) {
                    alert("나는 " + value2);
                    alert("com: " + rcp[computervalue]);
                    if (controlbit[0] == 2) { alert("컴퓨터승"); }
                    if (controlbit[0] == 1) { alert("내가 이겼따!"); }
                    judge = false;
                    game = false;
                    break;
                }

                while (judge) {
                    if (rcp[computervalue] === "가위") {
                        alert("com:" + rcp[computervalue]);
                        alert("내가 짐3");
                        controlbit[0] = 2;
                        alert("컴퓨터의 선공입니다. 컴퓨터가 뭘낼지 결정중입니다.");
                        computervalue = parseInt(Math.random() * 3);
                        value2 = prompt("당신이 뭘낼지 결정하십시오");
                        judge = false;
                        break;
                    } else if (rcp[computervalue] === "바위") {
                        alert("com:" + rcp[computervalue]);
                        alert("내가 이김3");
                        controlbit[0] = 1;
                        alert("당신의 선공입니다. 당신이 뭘낼지 결정하십시오");
                        value2 = prompt();
                        alert("컴퓨터가 뭘낼지 결정중입니다.")
                        computervalue = parseInt(Math.random() * 3);
                        judge = false;
                        break;
                    }
                    if (value2 !== "보") {
                        judge = false;
                        break;
                    }
                }
                judge = true;
                break;
            default:
                value2 = prompt("가위 바위 보를 다시 진행하십시오");
                break;
        }
    }
    game = true;
    if (value2 === rcp[computervalue]) {

        if (controlbit[0] == 1) {
            account = account + bet * 2;
            judge = true;

        } else if (controlbit[0] == 2) {
            account = account - bet * 2;
            judge = true;

        } else if (controlbit[0] == 0) {
            account = account + bet
        }
    }
    controlbit[0] = 0;
    alert(account + "남은 잔액");
    if (account <= 0) {
        alert("게임끝낫습니다");
    }


}



// 처음 입력받을때 가위 바위 보 3개를 판별한다.
// 임의의 n을 입력받았을때 같은지 다른지 다르다면 어떻게 다른지 판별한다
// 같다면 바로 계좌에서 -를 해준다.
// 다르다면 while judge 문으로가서 판별을한다.
// 만약 내가 이긴경우라면 선공권을 가진것으로 controlbit [0,0]을 [1,0]으로 으로 바꾼다.
// 내가 내가 진경우라면 컴퓨터가 선공권을 가진것으로 controlbit [0,1]으로 바꾼다.
// 가위 바위 보를 while judge문의 처음으로 가서 한번더 진행한다. 이때 둘의 값이 같다면 controlbit가 [1,0] 인지 [0,1]인지 판단한다.다르다면 다시 가위바우보 처음으로 돌아간다
// [1,0]이면 내 계좌에 돈 추가 [0,1]이라면 내 계좌에서 돈 빼기
// 게임이 끝난뒤 controlbit[0,0]으로 초기화한다. 
