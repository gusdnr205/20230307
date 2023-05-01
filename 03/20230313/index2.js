// 우리가 만들어볼거 업다운 게임
// 숫자 맞추기

// 1. 플레이어가 있고 , 컴터가 있고
// 2. 플레이어는 선택을 할수 있게하고, 컴터는 랜덤값
// 3. 플레이어가 선택할수있는 제어문.
// 4. 게임의 종료 시점을 정해야겠다. 

let playerSelect;
//1~100 의 랜덤숫자
let comSelect = parseInt(Math.random() *99 +1);

let count = 0; //시도를 몇번할건지 플레이어가 선택할수있게

let max =100; // 플레이어가 선택이 가능한 최대의 숫자

let min =0; // 플레이어가 선택이 가능한 최소의 숫자

let subtext = ""; //컴퓨터가 알려줄 문구

let maxCount =parseInt(prompt("게임 몇번할래?")); // 게임횟수 이걸로

// 반복되어야하니까

while(playerSelect !== comSelect&& count<maxCount){
    // ES6에서 문자열을 사용할때 편하게 사용할수 있는 기법
    // 템플릿 리터럴 이렇게 일컫는데 문자를 다룰때 줄바꿈 같은걸 사용하기
    // 편하게 해준다.
    // `백틱 1왼쪽의 물결
    //`ㅁㄴㅇㄴㅁㅇ
   // ㄴㅇㄴㅇㅁㅇㄴㅇ` 
    //`${변수}문자열`
    // 문자를 작성할때 \n 줄내림을 해준다.
    playerSelect=prompt(`${subtext}\n 숫자를 입력하세요\n 최소 ${min} |최대${max}| 남은횟수:${maxCount-count}`);

    //splayerSelect= parseInt(playerSelect);
    // 입력된 값이 숫자인지 확인 ? 문자 쓰면 어떻게하지?
    // isNanN 숫자가 아닌값을 입력했는지 체크해준다. 숫자가 아닐경우 true
    if(isNaN(playerSelect))
    {   
        subtext="숫자 입력하셈"
        // 다시 게임시작해야하는데? 밑에 작성된 코드를 읽지않게 할수없을까?
        continue; // 다시 시작 컨티뉴? 
        // continue 구분부터 밑으로 읽지 않고 다시 반복문 시작점으로 돌아간다.

    }

    // 최소와 최대 사이의 값인지 확인 범위의 값이 맞는지
    if (min >= playerSelect || max <= playerSelect){
        subtext= `너 입렵값 확인해 최소: ${min}} | 최대 | ${max}`;
        continue; // 다시 입력하셈
    }

    // 게임의 로직시작

    if(playerSelect > comSelect){
        // max 최대값을 다시 겹치지지않게 입력해준다.
        max = playerSelect;
        subtext= "다운"    
    }
    else if (playerSelect<comSelect){
        // min 최소값을 다시 겹치지않게 입력해준다.
        min=playerSelect;
        subtext= "업";
    }else {
        count=count++;
        console.log(`${count}번 시도해서 너맞췄어 `);
        // 게임끝났음
        break;
    }
    // 게임 횟수 증가해야함
    count++;
    if(count>=maxCount){
        console.log("게임 오버 메롱~");
    }
}

// 1. 가위바위보 게임을 20판  게임시작 전 돈걸고 시작 
// 2000원이상으로 걸수있게 이상아니면 다시입력
// -> 배팅금액 2만원 들고시작 
// 2. 가위바위보 이기면 묵찌빠 -> 이기면 배팅한 금액의 *2로 판돈
// 지면 마이너스 배팅한 금액의 *2
// 종료조건 20판 다 끝나면 or 돈다 잃었을때
// 소지금이랑 몇판했는지 알려주기


let game2= true;
let player=true;
let computer= true;
let attack= [0,1,2];
// while(game2){
//     //가위바위보 후 선제권을 가지는과정
//     if(attack===0){
//         //player가 먼저 수를 입력한다. 0 플레이어가 이긴경우
//         //컴퓨터가 입력한다. 
//         //같을경우 플레이어 승리
//         if player win
//         game2 = false
//         else if palayervalue !== computervalue
//         game2 = true
//         //같지않을경우 다시 입력한다. ? 같지않을경우 true 
//     }else if(attack===1){
//         //com이 먼저 수를 입력한다. 1컴퓨터가 이긴경우 
//     }else if(attack===2){
//         // 비긴경우 
//     }

// }
