// function createCharacters(name, atk, def, hp){ // 플레이어와 몬스터 생성 함수
//     this.name = name;
//     this.atk = atk;
//     this.def = def;
//     this.hp = hp;
// }

function createCharacters(name, atk, def, hp, stealSuccessPer, exp, level) { // 플레이어와 몬스터 생성 함수
    this.name = name;
    this.atk = atk;
    this.def = def;
    this.hp = hp;
    this.stealSuccessPer = stealSuccessPer; // 이확률은 내 훔치기 성공확률에서 -연산을 해주게된다.
    this.exp = exp;
    this.level = level;
}

function mainPlayerCharacter(name, atk, def, hp, crit, exp, money, stealPer) {
    this.name = name;
    this.atk = atk;
    this.def = def;
    this.hp = hp;
    this.crit = crit;
    this.exp = exp;
    this.money = money;
    this.stealPer = stealPer;
}

//                                          atk def  hp crit exp money stealPer 기본 20%
let player = new mainPlayerCharacter("병주", 50, 10, 10, 0.5, 0, 1000, 20);
//                                       atk def hp stealSuccessPer exp level(난이도정도로 생각)
let muheon = new createCharacters("무헌", 20, 10, 40, 0, 10, 10);
let professor = new createCharacters("교수", 20, 10, 40, 5, 20);
let boss_lee = new createCharacters("학과장", 20, 10, 40, 10, 100);
let hyunwook = new createCharacters("현욱", 20, 10, 40, 10, 1);
let ahyeon = new createCharacters("아현", 20, 10, 40, 10, 5);
let jisup = new createCharacters("지섭", 20, 10, 40, 10, 1);
let megacoffee = new createCharacters("메가커피", 20, 10, 40, 10, 30);

// let player = new createCharacters("병주",20,10,100);
// let muheon = new createCharacters("무헌",20,10,100);
// let professor = new createCharacters("교수",20,10,100);
// let boss_lee = new createCharacters("학과장",20,10,500);
// let hyunwook = new createCharacters("현욱",20,10,100);
// let ahyeon = new createCharacters("아현",20,10,100);
// let jisup = new createCharacters("지섭",20,10,100);
// let megacoffee = new createCharacters("메가커피",20,10,200);

let monster = [muheon, professor, hyunwook, ahyeon, jisup, megacoffee, boss_lee]; // 몬스터 배열
let rndindex = parseInt(Math.random()*6); // 몬스터 랜덤으로 뽑기

let monsterNameSetting = document.querySelector('.monsterNameTag');
let monsterHpSetting = document.querySelector('.monsterHpNumber');


function rndMonsterAppear() { // 몬스터 등장순서 랜덤으로 만드는 것 학과장은 가장 뒤
    // let rndidex = parseInt(Math.random() * 6);
    let n = 0;
    let temp;
    // for (let i = 0; i < monster.length - 1; i++) {
    //     rndidex = parseInt(Math.random() * 6);
    //     AppearIndex[i] = rndidex;
    // }
    // console.log(AppearIndex);

    // for (let i = 0; i < monster.length - 1; i++) {
    //     for (n; n < monster.length-1; n++) {
    //             rndidex = parseInt(Math.random() * 6);
    //             console.log(rndidex);
    //             if (AppearIndex[i] !== rndidex) {
    //                 AppearIndex[i] = rndidex;
    //                 console.log("이거 잘되는거 맞음?");
    //         }
    //     }

    // }
    for (let i = 0; i < monster.length - 1; i++) {
        AppearIndex[i] = i;
    }
    for (let i = 0; i < monster.length - 1; i++) {
        // rndindex = parseInt(Math.random() * 6);
        temp = AppearIndex[i];
        AppearIndex[i] = AppearIndex[rndindex];
        AppearIndex[rndindex] = temp;
        // monsterNameSetting.innerHTML = monster[rndindex].name;
        // monsterHpSetting.innerHTML = monster[rndindex].hp;
    }
    for (let i = 0; i < monster.length - 1; i++) {
        AppearIndex[i] = monster[AppearIndex[i]];
    }
    AppearIndex[6] = monster[6];

    monsterNameSetting.innerHTML = AppearIndex[0].name;
    monsterHpSetting.innerHTML = AppearIndex[0].hp;

    console.log("최종");
    console.log(AppearIndex);
    return AppearIndex
}

let monsterInitialHp; // 몬스터의 전투 시작 전 체력
let playerInitialHp = player.hp; // 플레이어의 전투 시작 전 체력
let playerHpSetting = document.querySelector('.playerHpNumber');

let monsterHpBarLength = 400;
let playerHpBarLength = 400;
// console.log(typeof(hpBarLength));

let monsterHpChange = document.querySelector('.monsterHpBarImage');
monsterHpChange.style.width = `${monsterHpBarLength}px`;

let playerHpChange = document.querySelector('.playerHpBarImage');
playerHpChange.style.width = `${playerHpBarLength}px`

let monsterHpBarLengthChange;
// console.log(monsterHpBarLengthChange);
    monsterHpBarLengthChange = monsterHpBarLength * ((player.atk - AppearIndex[i].def) / monsterInitialHp);

let playerHpBarLengthChange;

    playerHpBarLengthChange = playerHpBarLength * ((AppearIndex[i].atk - player.def) / playerInitialHp);

let playerAttackingAnimation = document.querySelector('.playerImage');
let monsterHitAnimation = document.querySelector('.monsterImage');
let playerHitAnimation = document.querySelector('.playerImage');
let monsterAttackingAnimation = document.querySelector('.monsterImage');





function monsterAppear(i){
    monsterNameSetting.innerHTML = AppearIndex[i].name;
    monsterHpSetting.innerHTML = AppearIndex[i].hp;
}

function getExp(monster) {
    player.exp = player.exp + monster.exp;
}

function mainPlayerCharactesDie() {
    if (player.hp === 0)//플레이어가 죽는조건
    {   
        //플레이어가 가진것을 초기화한다. 돈제외
        player.atk = 10;
        player.def = 10;
        player.hp = 100;
        player.crit = 0.5;
        player.exp = 0;
        player.stealPer = 5;
        return true
    }
    // } else return false
}
mainPlayerCharactesDie();

// function MonstersDie(monsObj) {
//     if (monsObj.hp === 0) { // 
//         console.log("몬스터죽음");
//         getExp();
//         return true
//     } else (monsObj.hp !== 0)
//     {
//         console.log("몬스터살아있음");
//         return false
//     }

// }

// function MonsterDie(){
//     if(AppearIndex[i].hp === 0){
//         monsterNameSetting.innerHTML = AppearIndex[i+1].name;
//         monsterHpSetting.innerHTML = AppearIndex[i+1].hp;
//     }else if(AppearIndex[6].hp === 0){
//         alert("축하합니다. 게임을 클리어 하셨습니다.")
//     }
// }
// MonsterDie();

// function MonstersDie() {
//     if (monster[rndindex].hp === 0) { // 
//         console.log("몬스터죽음");
//         getExp();
//         return true
//     } else (monster[rndindex].hp !== 0)
//     {
//         console.log("몬스터살아있음");
//         return false
//     }
// }

// MonstersDie();

function playerAttack(){
    // for(i = 0; i <= 6; i++){
    //     AppearIndex[i].hp = AppearIndex[i].hp - player.atk + AppearIndex[i].def;
    //     monsterHpSetting.innerHTML = AppearIndex[i].hp;
    //     console.log(AppearIndex[i].def);
    //     if(AppearIndex[i].hp === 0){
    //         setTimeout(() => {
    //             alert(`${AppearIndex[i].name}을(를) 처치하였습니다.`)
    //         }, 500);
            
    //     }

    // }
    let i = 1;
    // monsterAppear(0);
    temp = AppearIndex[0];
    AppearIndex[0].hp = AppearIndex[0].hp - player.atk + AppearIndex[0].def;
    monsterHpSetting.innerHTML = AppearIndex[0].hp;
    if(AppearIndex[0].hp === 0){
        setTimeout(() => {
            alert(`${temp.name}을(를) 처치하였습니다.`)
        }, 1500);
        return 0;
    }
    AppearIndex[0] = AppearIndex[i];
    i++;
    monsterAppear(i);
    // monster[rndindex].hp = monster[rndindex].hp - player.atk + monster[rndindex].def;
    // monsterHpSetting.innerHTML = monster[rndindex].hp;
    // if(monster[rndindex].hp === 0){
    //     setTimeout(() => {
    //         alert(`${monster[rndindex].name}을(를) 처치하였습니다.`)
    //     }, 500);
    //     rndMonsterAppear();
    // }
    
}

function monsterAttack(){
    // for(i = 0; i <= 6; i++){
    //     player.hp = player.hp - AppearIndex[i].atk + player.def;
    // }
    // playerHpSetting.innerHTML = player.hp;
    // console.log(AppearIndex[i].atk);

    player.hp = player.hp - AppearIndex[0].atk + player.def;
    playerHpSetting.innerHTML = player.hp;
    if(player.hp === 0){
        setTimeout(() => {
            alert("응 사망 공격못함");
        }, 500);
    }
}

function monsterHpBarChange(){
    monsterHpBarLength = monsterHpBarLength - monsterHpBarLengthChange;
    monsterHpChange.style.width = `${monsterHpBarLength}px`;
}

function playerHpBarChange(){
    playerHpBarLength = playerHpBarLength - playerHpBarLengthChange;
    playerHpChange.style.width = `${playerHpBarLength}px`;
}

function playerAttackAnimation(){
    playerAttackingAnimation.style.animation = "attackingMotion 1s ease";
}

function monsterAttackAnimation(){
    monsterAttackingAnimation.style.animation = "monsterAttackingMotion 1s ease";
}

function monsterHit(){
    monsterHitAnimation.style.animation = "MotionWhenHit 0.5s ease";
}

function playerHit(){
    playerHitAnimation.style.animation = "MotionWhenHit 0.5s ease";
}

function buttonClickAttack(){
        playerAttackAnimation(); 
        setTimeout(() => {
            monsterHit();
        }, 1000);
        setTimeout(() => {
            monsterHpBarChange();
        }, 1500);
        setTimeout(() => {
            playerAttack();
        }, 1500);
    
    // playerAttackGeneral();
    // if(AppearIndex[0].hp != 0){
    //     monsterAttackGeneral();
    // }else{
    //     monsterAppear();
    // }
}

function playerAttackGeneral(){
    if(playerAttack() === 0){
        playerAttackAnimation(); 
        setTimeout(() => {
            monsterHit();
        }, 1000);
        setTimeout(() => {
            monsterHpBarChange();
        }, 1500);
        setTimeout(() => {
            playerAttack();
        }, 1500);
    }
    // playerAttack();
}

function monsterAttackGeneral(){
    setTimeout(() => {
        monsterAttackAnimation();
    }, 3000);
    setTimeout(() => {
        playerHit();
    }, 4000);
    setTimeout(() => {
        monsterAttack();
    }, 4500);
    // monsterAttack();
    setTimeout(() => {
        playerHpBarChange();
    }, 4500);
}

// function falseButtonClickAttack(){
//     setTimeout(() => {
//         monsterAttackAnimation(); // 몬스터가 공격하는 애니매에션
//     }, 3000);
//     setTimeout(() => {
//         playerHit(); // 플레이어가 맞는 애니메이션
//     }, 4000);
//     setTimeout(() => {
//         monsterAttack(); // 플레이어 hp 숫자 변화
//     }, 4500);
//     // monsterAttack();
//     setTimeout(() => {
//         playerHpBarChange(); // 플레이어 hp bar 변화
//     }, 4500);
// }

// if(AppearIndex[0].hp === 0){

// }
        // playerHpBarChange();
        // setTimeout(monsterAttack() {
            // }, 1000);

function steal(monsterPer) {
    //let SuccessStealPercentage = 100;
    let stealPercentage = parseInt(Math.random() * (player.stealPer - monsterPer));
    let randStealPer = parseInt(Math.random() * 100);

    if (stealPercentage >= randStealPer) {
        alert("훔치기 성공!");
        // console.log("훔치기 성공!");
    } else if (stealPercentage < randStealPer) {
        alert("훔치기 실패ㅠㅠ");
        // console.log("훔치기 실패");
    }
    // 상점에 들어가야할기능
    // if(stealPercentage===maxstealPercentage)
    // {
    //     alertMessage("확률을 100%이상으로 높일수없습니다.");
    // }


}

function buttonClickSteal(){
    playerAttackAnimation();
    setTimeout(() => {
        monsterHit();
    }, 1000);
    setTimeout(() => {
        steal(AppearIndex[0].stealSuccessPer);
    }, 2000);
    // setTimeout(() => {
    //     playerAttack();
    // }, 1500);
    // // playerAttack();
    // setTimeout(() => {
    //     monsterHpBarChange();
    // }, 1500);
    // monsterHpBarChange();
    setTimeout(() => {
        monsterAttackAnimation();
    }, 3000);
    setTimeout(() => {
        playerHit();
    }, 4000);
    setTimeout(() => {
        monsterAttack();
    }, 4500);
    // monsterAttack();
    setTimeout(() => {
        playerHpBarChange();
    }, 4500);
}


// function steal(){

// }

// function buttonClickItemUse(){
    
// }

// function itemUse(){

// }



let playerLocation = document.querySelector('.playerImage');
playerLocation.innerHTML = "플레이어 이미지";

let monsterLocation = document.querySelector('.monsterImage');
monsterLocation.innerHTML = "몬스터 이미지";

// function setMonsterInfo(name,hp){
//     let monsterName = document.querySelector('.monsterNameTag');
//     let monsterHp = document.querySelector('.monsterHpBar');
    
// }

let playerName = document.querySelector('.playerNameTag');
playerName.innerHTML = player.name;

let playerHP = document.querySelector('.playerHpNumber');
playerHP.innerHTML = player.hp;

// function fightRepeat(){
//     rndMonsterAppear();
//     for(i = 0; i <= 5; i++){
//         monsterInfoSetting(i);
//         buttonClickAttack();
//     }
// }

// function monsterInfoSetting(i){
//     monsterNameSetting.innerHTML = AppearIndex[i].name;
//     monsterHpSetting.innerHTML = AppearIndex[i].hp;
// }

// let monsterName = document.querySelector('.monsterNameTag');
// monsterName.innerHTML = monster[1].name;

// let monsterHP = document.querySelector('.monsterHpBar');
// monsterHP.innerHTML = monster[1].hp;

// monsterper에는 muheon.stealSuccessPer 가들어간다.
// function steal() {
//     //let SuccessStealPercentage = 100;
//     let stealPercentage = parseInt(Math.random() * (player.stealPer - monster[rndindex].stealSuccessPer));
//     let randStealPer = parseInt(Math.random() * 100);

//     if (stealPercentage >= randStealPer) {
//         alert("훔치기 성공!");
//         console.log("훔치기 성공!");
//     } else if (stealPercentage < randStealPer) {
//         alert("훔치기 실패ㅠㅠ");
//         console.log("훔치기 실패");
//     }
//     // 상점에 들어가야할기능
//     // if(stealPercentage===maxstealPercentage)
//     // {
//     //     alertMessage("확률을 100%이상으로 높일수없습니다.");
//     // }
// }

// async function f() {
//     let promise = new Promise((resolve, reject) => {
//         setTimeout(() => resolve(selectPlayerChoice), 3000)
//     });

//     let onIn = await promise; // 프라미스가 이행될 때까지 기다림 (*)
//     if (onIn >= 1) {
//         console.log("선택이 되었습니다")


//         console.log(selectPlayerChoice);

//         switch (onIn) {
//             case 1: attack();
//                 console.log("attack");
//                 break;
//             case 2: steal();
//                 console.log("steal");
//                 break;
//             case 3: itemUse();
//                 console.log("use");
//                 break;
//             default:
//                 break;
//         }
//         selectPlayerChoice = 0;
//     }
// }

// f();

// function fight(monsObj) {
    
//     let gameDone = true;
//     let preAttackbit = 0; // 0일때 플레이어 공격 1일때 몬스터 공격 시작은 항상0으로 시작한다.
//     setMonster(monsObj.name);
//     while (gameDone) {
//         if (preAttackbit === 0) {
//             //3가지중하나가 선택가능하다. 하나만가능하다는 메시지를 넘겨준다. 싸우기 버튼을 누를경우 리턴1을해준다. 훔치기를 누를경우 리턴2를해준다. 인벤토리를 3을 리턴한다.
//             console.log("하나만선택가능합니다!")
//             f();
//             console.log(selectPlayerChoice);
//             preAttackbit = 1;
//         } else if (preAttackbit === 1) {
//             monsterAct();
//             preAttackbit = 0;
//         }
//         if (mainPlayerCharactesDie() || MonstersDie(monsObj)) {
//             gameDone = false;
//             preAttackbit = 0;

//         }

//     }
// }

 function mainFightstart() {
     let mons=[];
     mons=rndMonsterAppear();
     //몬스터 배열정리랜덤배열
     rndMonsterAppear();
     //컷신 불러오는 함수
     //전투를 불러오는함수   //몬스터를 세팅시켜주는함수  //플레이어를 세팅시켜주는함수
     fight(mons[0]);
     cut();  
     //게임은 턴제방식 선공권은 항상플레이어가 가진다.
     //어떤행동을하든 1턴을 소모한다.
     //공격시 getdmg함수 steal 함수 useitem함수 플레이어 선제턴 진행
     //체력깍이는 html조작 함수실행
     //사용자 죽었는지 몬스터죽었는지 판별하는함수
     //몬스터 공격진행
     //체력깍이는 html조작 함수실행
     ///사용자 죽었는지 몬스터죽었는지 판별하는함수
     //사용자 죽었을시 돈제외 초기화하며 메인화면으로 이동 몬스터죽었을시 경험치 돈 얻는다
     //다음컷신
     //7단계 학과장잡을때까지 무한반복
 }