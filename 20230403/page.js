let tNav;
tNav = document.querySelector(".topnav");
let isaActive;
isaActive = document.querySelector(".isAct");
let body = document.querySelector("readlMain");
let img1 = document.querySelector(".img1");

let fix = document.querySelectorAll(".image-fix");

let asdsad=location.href
let asdsad2=location.href
let asdmmm=true;
let dd;
dd = document.querySelectorAll(".imagess");



window.addEventListener("scroll", function (e) {
  // console.log(this.location.href);
   console.log(window.scrollY);
 
  if (this.window.scrollY > 75) {
    console.log("dd");
    this.setTimeout(function () {
      tNav.classList.add("isAct");
    }, 500);
  } else if (this.window.scrollY < 75) {
    console.log("나 작동됌!");
    if (tNav.classList.contains("isAct")) {
      tNav.classList.remove("isAct");
    }
  }
  if (1030 < this.window.scrollY) {
    fix[0].classList.add("hidden");
    fix[1].classList.add("hidden");
    this.setTimeout(function(){
      fix[0].classList.remove("image-fix");
      fix[1].classList.remove("image-fix");
    },500);
  
  } else {
    fix[0].classList.add("image-fix");
    fix[1].classList.add("image-fix");
    fix[0].classList.remove("hidden");
    fix[1].classList.remove("hidden");
  }
  if (this.window.scrollY > 1942 && this.window.scrollY<2000) {

    dd[0].classList.add("image-fix2");
    dd[1].classList.add("image-fix2");
  }

  if (this.window.scrollY > 2990 && this.window.scrollY<3100) {
    console.log("나 발동됌!");
    dd[0].classList.add("hidden");
    dd[1].classList.add("hidden");

    this.setTimeout(function(){
      dd[0].classList.remove("image-fix2");
      dd[1].classList.remove("image-fix2");
      dd[0].classList.remove("hidden");
      dd[1].classList.remove("hidden");
    },500)
  }else if(this.window.scrollY < 1900 && this.window.scrollY>=1800)
  {
    dd[0].classList.remove("hidden");
    dd[1].classList.remove("hidden");
    dd[0].classList.remove("image-fix2");
    dd[1].classList.remove("image-fix2");
    console.log("haahh");
  }
  if(this.window.scrollY < 2900 && this.window.scrollY  >2700){
    dd[0].classList.add("image-fix2");
    dd[1].classList.add("image-fix2");
  } 

  if (this.window.scrollY > 3930 && asdmmm===true) {
    // document.querySelector(".readlMain").style = "display:none";
    // if(this.location.href!=asdsad+"#aa"){// http://127.0.0.1:5500/20230403/page.html#aa

      window.scroll({top : document.querySelector('#aa').offsetTop});
    
      // location.href="#aa";
      // console.log(this.location.href);
      console.log("응애");
      asdmmm=false;
      console.log(asdmmm);


      // this.location=asdsad2;

      // console.log( this.location.href);
    // }
  }
});

window.addEventListener("scroll", function () {
  const scrollY = window.scrollY;
  const image1Height = document.querySelector(".image1").offsetHeight;
  const overlap = image1Height - scrollY;
  if (overlap > 0) {
    document.querySelector(
      ".image2"
    ).style.clip = `rect(${overlap}px, auto, auto, auto)`;
  } else {
    document.querySelector(".image2").style.clip = "rect(0, auto, auto, auto)";
  }
});

window.addEventListener("scroll", function () {
  const scrollY = window.scrollY;
  let image1Height1 = document.querySelector(".image1ss").offsetHeight;
  image1Height1 = image1Height1 + 2000;
  const overlap1 = image1Height1 - scrollY;
  if (overlap1 > 0) {
    document.querySelector(
      ".image2ss"
    ).style.clip = `rect(${overlap1}px, auto, auto, auto)`;
  } else {
    document.querySelector(".image2ss").style.clip =
      "rect(0, auto, auto, auto)";
  }
});

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

//   window.addEventListener("scroll", function () {
//     if(this.window.scrollY>3000)
//     {
//         console.log("발동됌ㅁㄴㅇㅇㅇ")
//         addElement()
//     }

// })
document.body.onload = addElement;
function addElement() {
  // create a new div element
  let newDiv = document.createElement("div");
  let newh1 = document.createElement("h1");
  // and give it some content
  newDiv.setAttribute("class", "maincutbox");
  //    newDiv.innerHTML=newh1.setAttribute("data-title");
  //    let newContent = document.createTextNode("<h1></h1>");
  newh1.setAttribute("data-title", "현욱의 문단속");
  newh1.setAttribute("class", "heading");

  newDiv.append(newh1);
  //    let newContent = document.createTextNode("환영합니다!");
  //    // add the text node to the newly created div
  //    newDiv.appendChild(newContent)
  // add the newly created element and its content into the DOM
  let currentDiv = document.getElementById("div1");

  currentDiv.appendChild(newDiv);
  temp();
}

/*------------------------------------------------------------------------------------------------------------------*/

console.log(
  document.querySelector(".text-warp h2").getBoundingClientRect().top +
    window.pageYOffset
);
let posY =
  document.querySelector(".text-warp h2").getBoundingClientRect().top +
  window.pageYOffset;
window.onscroll = function () {
  console.log("스크롤 됨");
  console.log(window, scrollY);
  if ((posY < window, scrollY)) {
    document.querySelector(".header").classList.add("isActive");
  } else {
    document.querySelector(".header").classList.remove("isActive");
  }
};

let _start;
// 진행중인 인덱스
let _index = 1;
let _move = false;
let _moveStart;

let _swiper = document.querySelector(".swiper");
let _swiperContent = document.querySelector(".swiper-content");
let { length } = document.querySelectorAll(".swiper-item");
let _prev = document.querySelector(".prev");
let _next = document.querySelector(".next");

console.log(length);

//getComputedStyle 적용된 스타일의 값을 가져올 수 있다.
// 적용된 스타일을 가져올 태그를 매개변수로 전달
let _swiperWidth = parseInt(getComputedStyle(_swiper).width);
console.log(_swiperWidth);

_swiper.addEventListener("mousedown", function (e) {
  _move = true;
  _moveStart = e.clientX;
  _start = e.clientX;
});

_swiper.addEventListener("mouseup", function (e) {
  console.log(e.clientX - _start);
  if (e.clientX - _start <= -50) {
    // 0 1 2 3 4 5
    _index++;
    swiperMove();
    if (_index == 5) {
      setTimeout(function () {
        _swiperContent.style.transition = "0s";
        _swiperContent.style.left = "-900px";
        _index = 1;
      }, 1000);
      setTimeout(function () {
        _swiperContent.style.transition = "1s";
      }, 1100);
    }
  } else if (e.clientX - _start >= 50) {
    console.log("끝 좌표가 더 커");
    _index--;
    1;
    swiperMove();

    if (_index == 0) {
      setTimeout(function () {
        _swiperContent.style.transition = "0s";
        _swiperContent.style.left = "-3600px";
        _index = 4;
      }, 1000);
      setTimeout(function () {
        _swiperContent.style.transition = "1s";
      }, 1100);
    }
  }
});

// 인덱스를 기준으로 움직임
function swiperMove() {
  _swiperContent.style.left = -(_index * _swiperWidth) + "px";
}

_prev.addEventListener("click", function () {
  _index--;
  console.log("작동함");
  swiperMove();
  if (_index == 0) {
    setTimeout(function () {
      _swiperContent.style.transition = "0s";
      _swiperContent.style.left = "-3600px";
      _index = 4;
    }, 1000);
    setTimeout(function () {
      _swiperContent.style.transition = "1s";
    }, 1100);
  }
});
_next.addEventListener("click", function () {
  _index++;

  swiperMove();
  if (_index == 5) {
    setTimeout(function () {
      _swiperContent.style.transition = "0s";
      _swiperContent.style.left = "-900px";
      _index = 1;
    }, 1000);
    setTimeout(function () {
      _swiperContent.style.transition = "1s";
    }, 1100);
  }
});

//처음 시작 인덱스==0 =>4
//처음 인덱스 ==1 =>1
