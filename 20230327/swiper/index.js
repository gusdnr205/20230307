//클릭의 시작위치를 가지고있고
//끝나면 끝난 좌표와 비교를 해서
// 오른쪽으로 스와이프 된건지
// 왼쪽으로 스와이프 된건지 부터 확인을하고 인덱스를 기준으로
//움직임을 제어해보자

//마우스 시작 클릭 지점 x 좌표
let _start;
// 진행중인 인덱스
let _index = 1;

let _swiper = document.querySelector(".swiper");
let _swiperContent = document.querySelector(".swiper-content");
let { length } = document.querySelectorAll(".swiper-item");
let _prev = document.querySelector(".prev");
let _next = document.querySelector(".next");
let asd=document.querySelector('.swiper-content')
console.log(length);
//getComputedStyle 적용된 스타일의 값을 가져올수있다.
// 적용된 스타일을 가져올대그를 매개변수로 전달
let _swiperWidth = parseInt(getComputedStyle(_swiper).width);

//마우스가 눌리면
_swiper.addEventListener("mousedown", function (e) {
  console.log("클릭 시작");
  // 클릭했을때 x좌표
  console.log(e);
  _start = e.clientX;
  console.log(_start);
});

_swiper.addEventListener("mouseup", function (e) {
  let _start2 = e.clientX;
  console.log("클릭 끝");
 if((_start-_start2)>150 || (_start-_start2)<-150){
     if (e.clientX < _start) {
         console.log("끝 좌표가 더 작아");
         if (_index < length - 1) _index++;
         swiperMove();
        } else {
            console.log("끝좌표가 더 커");
            if (_index > 0) _index--;
            swiperMove();
        }
        
    }

  });


//인덱스를 기준으로 움직임
function swiperMove() {
  console.log("뒤짐?");
  _swiperContent.style.left = -(_index * _swiperWidth) + "px";
 


}
_prev.addEventListener("click", function () {
  if (_index > 0) _index--;
  swiperMove();
  console.log("뒤로");
  console.log(_index);
  if(_index ===0)
  {
    _index=4;
    if(asd.classList.contains("is-active")){

    }else{
        asd.classList.add("is-active");
    }
    _swiperContent.style.left=-(_index * _swiperWidth) + "px";
    
  }else{
      asd.classList.remove("is-active");
  }
 
});

// _next.addEventListener("click", function () {
//   if (_index < length - 1) _index++;
  
//   console.log("앞으로");
//   console.log(_index);
//   swiperMove();
//   if(_index ===5)
//   {
//     _index=1;
//     if(asd.classList.contains("is-active")){

//     }else{
//         asd.classList.add("is-active");
        
//     }

//     _swiperContent.style.left=(0)+"px";
    
//     asd.classList.remove("is-active");
//     _swiperContent.style.left=-(_index * _swiperWidth) + "px";
    
    
// //   }else{
// //       asd.classList.remove("is-active");
// //   }
 
//   }
 
// });

//0->-500 가는 만들어주기

_next.addEventListener("click", function () {
    if (_index < length - 1) _index++;
    
    console.log("앞으로");
    console.log(_index);
    swiperMove();
    
    if(_index ===5)
    {
      _index=1;
      if(asd.classList.contains("is-active")){
  
      }else{
          asd.classList.add("is-active");
      }
      
      // set the start and end values for the animation
      let start = 0;
      let end = -(_index * _swiperWidth);
      let current = start;
      
      // set the duration and interval for the animation
      let duration = 1000; // 1 second
      let interval = 10; // 10 milliseconds
      
      // calculate the increment value for each interval
      let increment = (end - start) / (duration / interval);
      
      // create the animation loop
      let animation = setInterval(function() {
        current += increment;
        _swiperContent.style.left = current + "px";
        if (current <= end) {
          clearInterval(animation);
          asd.classList.remove("is-active");
          _swiperContent.style.left = end + "px";
        }
      }, interval);
    }
  }
);


//5123451 5에서 1갈때 모션삭제해서 1번간다음 앞의 1뒤에 다음페이지 만들고 다시 isactive 때고 강제로 이동하는 이벤트 발생 그뒤에 다음페이지를 삭제한다. 