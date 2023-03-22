//dom 내용 추가 document obj model

//우리가 사용하는 div p h1 태그들

//DOM트리라고한다.
//dom 트리구조 한번보자.

//DOM트리의 기본구조는 노드라고한다.

//문자를 태그사이에 넣어서 태그를 추가하는 방법

document.querySelector(".add_class").innerHTML = "<div>태그내용</div>";

// 노드에 추가하는방법

// div 태그를 생성하는 방법
// createElement태그 생성해주는 메소드
// create(태그명)
let _div = document.createElement("div");
// 여기까지는 생성해서 _div변수에 담았고
// 생성된 태그는 메모리 공간에있는것

console.log(_div);
// 생성한 태그에 내용을 넣고
_div.innerHTML = "<div>냐옹</div><p>으아</p>";
// _div.classList.add("new_tag");
// 태그를 추가하고싶은 위치에 추가를 해줘야 트리에 추가되어보인다.
// 원하는 위치에 추가 해주자
// 사용할 메소드가있는데

// append() 메소드
// 태그 추가
document.body.append(_div);
setTimeout(() => {
  document.querySelector(".add_class").append(_div);
}, 2000);

//append 테모스는 원하는 이치에 태그를 추가할수있따.
// 태그참조.apped(생성한태그) = 태그참조 태그의 내용으로 태그가 추가된다.

//innnerHTML : 문자로 내용이 들어가서 보안이 좀 취약해진다.
//apend : dom트리으 노드이기때문에 보안이좋다. 문제가없다. 태그작업을 세분화가능하다

// 태그의 내용 전부확인
console.log(_div.innerHTML);

//태그의 내용에서 문자만가져오고싶어

//innterText가 있어요
//태그 사이의 태그 내용 문자만 가져온다.

console.log(_div.innerText);

// button 태그 생성
let _button = document.createElement("button");
_button.innerHTML = "눌러봐";
document.body.append(_button);
document.querySelector(".add_class").append(_button); // 제일위로간다?

//태그를 만들고 우리가 사요하는것처럼 그대로 사용하면되고
// 내용을 추가해준다음 원하는위치에 태그를 넣어주면된다

_button.onclick = function () {
  // 태그를 제거해보자
  // _div.remove();
  // remove() 메소드가 _div태그를 제거한다.
  // 원하는 태그를 제거할수있다.
  // 태그의 자식태그도 제거할수있다.
  // 태그의 자식태그는 removechild 메소드를 사용
  //let _div2=document.querySelector('');
  console.log(_div);
  // document.body.removeChild(_div);
  // _div 태그를 body 내용에서 찾아서 제거해준다.
};
// onclick 이렇게 이벤트명으로 직접함수를 대입해서 추가하는방법
// 함수를 덮어씌운다
// 또 다른 방법이 하나 더있다.

// 이벤트를 구독시킨다.
// onclick = > on만 뺴면된다.
// onscroll => on만 빼고 scroll
// addEventListener 메소드의 매개변수로 "구독할 이벤트 이름"
// 두번째 매개변수로 실행시킬 함수.
_button.addEventListener("click", function () {
  console.log("나 클릭 구독중");
});
_button.addEventListener("click", function () {
  console.log("나 역시 구독중");
});

// addEventListener 메소드는 이벤트를 누적시킬수있다. 추가가 가능하다는 얘기
// onclick은 이벤트를 덮어쓴다.

_button.onclick = function () {
  console.log("나 onlick 이벤트");
};
console.log(_button.onclick);
_button.onclick = function () {
  console.log("나 onlick 이벤트2");
};
console.log(_button.onclick);

// 이벤트들 뭐있나?

// load - 페이지와 기타 요쇼들의 그릴 준비 로딩이 끝났을때
// on이 붙으면 어트리뷰트 방식
window.onload = function (e) {};
// load 이벤트 구속시켜놓고
// addEventListener("이벤트의 타입",함수의 내용)을사용해서
// 이벤트를 구독해놓는다.
window.addEventListener("load", function () {
  // load이벤트가 실행되면 내용실행
});

//onresize : 브라우저의 창크기가 바뀌면 실행되는 이벤트
window.onresize = function () {
  console.log("창사이즈 변환");
};

// window.addEventListener("resize",function(){

// })

//scroll : 사용자가 태그나 페이지에서 스크롤 했을때
//          스크롤 값이 없으면 동작하지앟는다

// 태그의 이벤트로 원하는 이벤트로 구족하면 태그에서 그 이벤트가 발생될때
// 실행된다

//scroll overflow scroll 넘어가는 부분에 스크롤을 건다

//우리가 생성한 태그에서 scroll 이벤트가 일어날때
_div.onscroll = function () {
  console.log("나 스크롤 되고있니?");
};

//여기는 body 태그에서 scroll 이벤트가 발생할때
document.body.onscroll = function () {};

//키보드 이벤트들

//onkeydown : 사용자가 키보드를 눌렀을때 누르자마자 (누르고 땐게아니라 누르자마자)
window.onkeydown = function () {
  //console.log(" 나 키보드 누르자마자 ");
};

// onkeyup :사용자가 키보드를 누르고 땠을때(누르고 있다가 키를 때는순간)
window.onkeyup = function () {
  //console.log("키보드를 누르다 땠어!");
};

//onkeypress : 키보드를 누르고 있을때 (누르고 있으면 계속실행)

window.onkeypress = function () {
  //console.log("키보드를 누르는중ㅇㅇ");
};
// onkeydown 하는순간 동작 할 기능하나
// 누르고있는동안 발생시킬 기능 onkeypress

//마우스 이벤트
//click : 사용자가 해당태그를 클릭했을때 발생하는 이벤트
// window.onclick = function(){
//     console.log("나 클릭");
// }

//dbclick 되었을때 실행되는 함수

window.ondblclick = function () {
  //console.log("더블클릭");
};

//mousedown : 마우스를 누르자마 실행되는 이벤트
window.onmousedown = function () {
  //console.log("마우스 키다운");
};

//onmouseup: 마우스를 누르다가 땠을때 발생하는이벤트
window.onmouseup = function () {
  //console.log("마우스 키업");
};

//down up
//마우스  키를 누르고 이동한뒤 키를 땠을때 좌표를 계산해서 동작해야한느 기능을
// 만들때 사용한다.

//mousemonev : 마우스가 이동되는동안
// 그태그에서 일어날때
// 즉 태그에는 이벤트 속성이 다들어가있다
window.onmousemove = function () {
  console.log("마우스 이동중입니다.");
};

// onmouseenter: 마우스를 태그위로 올려졋을때 실행되는 이벤트
// hover랑 비슷
document.querySelector(".box").onmouseenter = function () {
  console.log("마우스 올려짐.");
};

//mouseleave 마우스 태그위에서 나갈떄 실행되는이벤트
document.querySelector(".box").onmouseleave = function () {
  console.log("마우스 나갔어");
};
_box = document.querySelector(".box");

//개발할때 pc, 모바일 이렇게 웹을 만들텐데
// 모바일 환경에서 실행되는 이벤트
// 모바일 터치

//touchstart : 화면을 터치한순간
window.ontouchstart = function () {
  console.log("터치한순간");
};

//touchend: 터치하다 떄면
window.ontouchend = function () {
  console.log("터치 떔");
};

//toucmove: 화면을 터치하고이동할때
window.ontouchmove = function () {
  console.log("터치하고이동중");
};

//드래그 이벤트

// 이벤트를 좀알아봣는데.
// 이벤트가 실행될때 매개변수로 해당 이벤ㅌ의 내용이 전돨되빈다.

_box.onclick = function (e) {
  // 이벤트의 내용들 이벤트가 실행되면 이벤트의 내용이
  //값으로 넘어온다.

  console.log(e);
  //해당 이벤트가 일어난 타겟
  // 지금은 winddow에 click 이벤트가 일어나면 실행되는
  //기능을 실행시켰고
  // 클릭된 태그를 가져온다
  //event.target의 클릭된 태그를 가지고온다.;
  console.log(e.target);
};

window.onmousemove = function (e) {
  // 타입이 뭐지?
  console.log(e.type);
  //해당 이벤트 일어나면 마우스의 좌표 x값
  //좌표값은 픽셀단위다.
  // 0~브라우저 너비크기
  //console.log(e.pageX);
  // 이벤트 발생시 마우스 좌표 y값
  // 0 ~ 브라우저의 높이
  //console.log(e.pageY);
};

// 키보드 입력
window.onkeydown = function (e) {
  // e.keyCode
  console.log(e.keyCode);
  // ascii 코드: 숫자로 표현된다
  // a를 입력하면
  if (e.keyCode == 65) {
    console.log("a를 입력받았따.");
  }
};

// 기본동작을 취소하는 방법


//기본동작을 취소하는방법
let _button2 = document.querySelector(".btn_class");
_button2.onclick=function(e)
{
    //기본 동작이 제거된다.
    //브라우저 상에서 기본동작되는 기능을 제거해줄수있다.
    e.preventDefault();
}
