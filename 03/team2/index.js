function temp() {
  let heading = document.querySelector(".heading"); // heading 클래스를 가진것에 접근
  let count = 0;
  let countTwo = heading.dataset.title.length; // data- 하고 title이란느 이름가진것에 접
  setTimeout(myFunc, 1000); // 1초뒤에 안의 함수를 실
  function myFunc() {
    let name = heading.dataset.title; // name에 헤딩클래스를 가진 data- 뒤에 tile이라는것을 저장
    heading.innerHTML = ""; //공백삽

       setInterval(() => {
         runFunc();
       }, 800); //고정된시간동안 반복실
    console.log(heading.dataset.title.length);
    let b = heading.dataset.title.length;
 
    function runFunc() {
      if (count < name.length) {
        // count가 내가 적추가할 무구보다 작을때 참 반환
        let createSpan = document.createElement("span"); //span을 새로히 생성해준다.
        createSpan.setAttribute("class", " ");
        createSpan.setAttribute("class", "animationOne");
        createSpan.innerHTML = name.charAt(count);
        heading.append(createSpan); //선택한 요소의 내용의 끝에 콘텐트를 추가하는 메서드
        count++;
      } else {
        heading.children[countTwo - 1].className = "animationTwo";
        countTwo--;
        if (countTwo <= 0) {
          heading.innerHTML = " ";
          count = 0;
          countTwo = heading.dataset.title.length;
        }
      }
    }
  }
}

function sleep(second) {
  let date = new Date();
  let seconds = date.getSeconds();
  while (seconds < seconds + second) {}
}
document.body.onload = addElement;
function addElement() {
  // create a new div element
  let newDiv = document.createElement("div");
  let newh1 = document.createElement("h1");
  let newButton = document.createElement("button");
  // and give it some content
  newDiv.setAttribute("class", "maincutbox");
  //    newDiv.innerHTML=newh1.setAttribute("data-title");
  //    let newContent = document.createTextNode("<h1></h1>");
  newh1.setAttribute("data-title", "현욱의 문단속");
  newh1.setAttribute("class", "heading");
  newButton.setAttribute("onclick", "nextstage();");
  newButton.setAttribute("class", "next");

  newDiv.append(newh1);
  newDiv.append(newButton);
  newButton.innerHTML = "안녕";
  //    let newContent = document.createTextNode("환영합니다!");
  //    // add the text node to the newly created div
  //    newDiv.appendChild(newContent)
  // add the newly created element and its content into the DOM
  let currentDiv = document.getElementById("div1");
  document.body.insertBefore(newDiv, currentDiv);
  temp();
}

function nextstage() {
  let next = document.querySelector(".maincutbox");
  console.log(next);
  if (next.classList.contains("is-active")) {
    next.classList.remove("is-active");
  } else {
    next.classList.add("is-active");
  }
}
// <button onclick="nextstage">다음으로가기 </button>

/* <div class="mainBox-wrap">
        <h1 data-title="무헌과 싸움이다! "class="heading"></h1>
</div> */

// function addDiv(){
// let creatediv = document.createElement("div");
// creatediv.setAttribute('class','mainBox-wrap');

// }
// addDiv();

// function playerAttack(){

//     // for(i = 0; i <= 6; i++){
//     //     AppearIndex[i].hp = AppearIndex[i].hp - player.atk + AppearIndex[i].def;
//     //     monsterHpSetting.innerHTML = AppearIndex[i].hp;
//     //     console.log(AppearIndex[i].def);
//     // }
//     monster[rndindex].hp = monster[rndindex].hp - player.atk + monster[rndindex].def;
//     monsterHpSetting.innerHTML = monster[rndindex].hp;
//     if(monster[rndindex].hp === 0){

//     }
//     AppearIndex[]

// }
