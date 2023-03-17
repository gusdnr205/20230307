// 오늘은 생성함수 
// 객체를 함수로 만들때 많이 사용해요
// 뭔가를 생성한다고 하네 이름부터
// 객체를 생성할때 사용하는 함수
// 모양이 어떻게 되는가?

//이생성자함수는 클래스선언으로 변경될수있습니다

// createObj생성자 함수 객체를 만들때 사용한다
function createObj(name,atk,def,speed){
    this.name=name;
    this.atk=atk;
    this.def=def;
    this.speed=speed;

}

// 이런모양으로 생성자 함수를만들고
// 이 함수를 가지고 객체를 생성하는방법
// 새로운 키워드 new라는 키워드를 사용한다.
// (동적할당) 메모리 공간을 동적으로 사용할수있게 해준다(할당)
// 새로운 객체를 생성하기위한 메모리 공간을
// new 키워드를 사용하면 빅객체를 만들고 생성자함수를 실행시켜서
// this가 빈객체를 참조하고 키값들을 추가한다. 객체를 만들어준다 
// 객체를 무어라 하면 될까? 
// 하나의 객체를 사람이라 표현했을때 
// 사람에대한 정보를 객체로 만들어놓고 사람을 생성
// 물건을 생성할때도 객체에 그물건의 정보를 키와 값으로 만들어서 
// 하나의 오브젝트화 시킨다. 
// let temp={
    // name: "이름",
    // age:24,
// }

let obj= new createObj("고블린",100,100,10);
console.log(obj);

let obj2= new createObj("트롤",200,100,10);
console.log(obj2);

// 전역변수만으로 프로그램을 관리하기에는 너무힘들기때문에
// 오브젝트화 객체화 시킨다.
let obj1_name="고블린"
let obj1_atk="100"
//첫번째 객체의 이름이구나
// obj.name

// obj["name"] 객체의 값에 접근하는방법
// obj.name 객체의 값에 접근하는방법
console.log(obj["name"]);

let arr = [1,2,3,4];
arr.forEach((i)=>{
    console.log(i);
})

for (let i=0; i<arr.length;i++) {
    console.log(arr[i]);
    
}

// for in 
// 자동완성했을때 object라고 적혀있는 변수에 우리가 보고싶은 
// 객체를 적어준다
for (const key in obj){
    //키값이 순서대로 나온다.
    //키값이 key변수에 순서대로 담긴다.
    // console.log(key);
    //이렇게 쓰면안된다. 
    //객체안에있는 key값을 찾는식이다.
    //밑에이쓴 코드는
    console.log(obj.key);
    console.log(obj[key]);
}

// 재미없어.. 눈에 변수밖에 안보여..
// 드디어 페이지에 변수 자바스크립트를 이용해서 동적인 
// 기능을 넣어보자.

// BOM 브라우저객체
// 브라우저의 기능들을 객체로 사용할수있게 해준것.
// alert();
console.log(window);

// onload 메소는 브라우저이 랜딩이 끝나고 보여줄 준비가 되었을때
// 실행되는 함수 문서를 랜더링하고 실행되는 함수
// window onload라는 키값에 함수값을 전달

window.onload=function(){
    console.log ("나 다그렸어~"); 
}


//DOM(문서 객체 모델): 문서를 객체의 모양으로 만든것
// 문선의 접근을 가능하게 해준다.

//DOM은 페이지에 있는 태그들을 객체로 표현한것
// documnent 객체에서 태그를 선택하는방법
// 객체를 이용해서 찾고싶은 태그를 자바스크립트로 가져와서
//사용할수잇다.
console.log(document);


// 태그 선택자들

//ID ----------------------------------------------------------------

//getElementById 메소드로 태그의 아아디를 찾아서 태그를 가져올수있다.
let div2 = document.getElementById("div1");

// 아이디 값이 있는태그는 그냥 변수처럼 사용해도된다.
// 계속 이야기한게 아이드는 한개만 태그에 하나만 같은 아이디가 있으면안된다.
// 아이디 중복 되지않게.
let div3= div1;

// queryselector 만능 이친구만 사용해도된다.
// #을 붙여서 아이디라고 아렬주고 div1을 찾아줘
let div4=document.querySelector('#div1');

console.log(div2);
console.log(div3);
console.log(div4);


// ----------------------------------------------------------------


// Class ----------------------------------------------------------------
// 이게안된다..
// 왜그럴까? 클래스는 중복될수있게 만들었으니까.
// 안되게한거다
// console.log(classdiv2);


// 문서를 읽다가 첫번째로 발견된 태그를 하나만 가지고온다.
// querySelector
let div5 = document.querySelector('.classdiv2');

console.log(div5);

//querySelectorAll 해당하는 전체 태그들을 가져온다.
let divArr=document.querySelectorAll('.classdiv2');
console.log(divArr);
// 배열의 형태로 가지고오는구나

// 태그 이름 선택자------------------------------------------------------
// querySelector변수의 내용은 CSS선택을 넣어주는거구나
// 문자열로 넣어주면된다.
let div6 = document.querySelector('div');
//---------------------------------------------------------------------

//이제 우리는 웹페이지를 만들수 있는 능력이 생겼다?

// 텍스트를 태그에 넣어주고싶어
// div1

div1.innerHTML= "gg";
//"<ul><li> 나 태그임 </li></ul>";
//gg 자리에텍스트로 태그로 추가해보아도 태그를 해석한뒤 달아준다.
// div1 태그의 내용을 추가할수있다. <div> 여기에 내용이 추가됨</div>

console.log(div1.innerHTML);

let div7 = document.querySelector('.classdiv2'); //맨위에있는거 바꾸는것
div7.innerHTML="나 이클래스를 가진 태그중 첫번째야";

let div8=document.querySelectorAll('.classdiv2');// 배열로가지고옴
div8[3].innerHTML = "난 이클래스를 가진 태그중 4번째야";


//////////////////////////////////////////////////////////////////////
// 버튼에 기능을 넣어보자 

// 버튼을 누르면 함수를 실행시켜보자
function btnFn(){
    //classdiv2 클래스를 가지고있는 태그들을 classdiv에 배열로 담고
    let classdiv= document.querySelector('.classdiv2');
    //그 배열을 foreach로 순회하면서 매개변수로 받았다.
    classdiv.forEach(function(i){
        i.innerHTML = "이문자로 너버튼눌렀지?"
    });

}

//html에서 함수를 가져가서 사용하자.