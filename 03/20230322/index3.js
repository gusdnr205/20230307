//쿠키, 세션, 로컬스토리지

//쿠키는 많이 들어봤을건데.

// 쿠키는 해당 pc에 남아았다.

//쿠키는 : 웹사이트를 방문하면 사용자의 pc에 기록할 간단한 데이터
//pc 저장해두어싿가 값을 호출해서사용할수있다
//브라우저가 종료되어도 남아있다

// 세션: 브라우저가 동작되는 동안에 남아있는 데이터 
// 상태같은 내용을 다룰때 사용한다 state? ex) 로그인이 되어있는 상태
// 브라우저가 동료되는 시점까지 유지된다.

//document 객체 안에있다.
console.log(document.cookie);

// 쿠키구조 

//쿠키구조
//키와 값이있다.
//문자열로 저장 하면된다.
// name: 쿠키의 이름 (키)
// value : 값
// time : 유효시간
function createCookie(name,value,time){
    // 처음 필요한거 쿠키의 지속 시간
    // 쿠키 유효기간 썩으면 못먹는당
    // 시간과 날짜 년도 정보를 제공해주는 객체 만들수가 있다.
    // 생성자로 구현이 가능하다. new 뭘생성해줘야하지?
    // Date 

    // 지금시간에 정보를 가지고있는 객체를만들어준다.
    let date= new Date();
    console.log(date);

    // 1시간이후에 제거하고싶어
    let day = 1;
    // getTime : 현재 시간 - 
    console.log(date.getTime()+day*24*60*60*1000);
    // 지금시간에서 + 얼마나 쿠키를 유지할지
    //추가해줄거임
    //쿠키가 제거될 시간을 구해서 
    // 값을 만들어놓고.
    // 만료시간

    // set get
    // set : 변경할때 네이밍으로 많이 사용된다.
    // get : 정보를 호출할때
    // 개체만들어서 정보를 가져온느경우 메소드는 get을 많이 쓰고 
    // set 
    // setTime 메소드
    date.setTime(date.getTime()+day*24*60*60*1000);

    //쿠키를 추가하는방법
    // 기본 규격
    //쿠키의명 = 값;exoires+만료일+";path=/"
    //path=/ 페이지의 경로에대한 설정 쿠키를 다루는경로
    // toUTCString 메소드는 날짜 시간표시방법을 변경해준다.
    console.log(date.toUTCString());
    document.cookie=name+"="+value+";expires"+date.toUTCString()+";path\/"
}
// createCookie("이벤트 팝업","true","");
createCookie("hello","worldc");
console.log(document.cookie);

function getCookie()
{
    let value=document.cookie.split("="); // 키와 값분리
    console.log(value);
    return value[1];
}


//쿠키함수를 작성해보자
// 정규식이 포함되기는 하는데 지금으 무사해도된다.

// 찾아서 작성하는 경우가 많다

function getCookie2(name)
{
    // amtch 메소드
    let value=cookie.match("(^|;)?"+ name+"");
    console.log(value);
    return
}

// 쿠키를 제거하는 함수 이 함수가 제일쉽다.
// 쿠키를 상하게만 하면된다. 날짜를 지나게
function deleteCookie(name){
    document.cookie = name + "=; expires=Thu, 01 jan 1999 00:00:10 GMT;";
}



// 로컬스토리지 
// 로컬스토리지: 브라우저에 데이터를 저장하는 방법들중 하나고,
// pc에 데이터가 저장되고
// 쿠키와 다른점 만료일이 없어.만료 기간이없다.

// 로컬스토리지 쉽다. 쿠키보다
// 브라우저에서 기능을 사용해야하니까 window 객체안에 있는 메소드를 사용
// getItem 메소드가 값을 호출할때 사용한다
// get이 붙었네?
// getItem() 메소드는 매개변수로 "키값" 
// window.localStorage.getItem();
//setItem  메소드는 값을 키와 함께 저장시켜준다.

//window.localStorage.setItem("user_id","su"); 

// let a=window.localStorage.getItem("user_id");

// console.log(a);

// 쿠키 , 로컬스토리지 이런 저장소에 민감한 값을 저장하면안된다.
// 보안이슈

// 오늘도 내용도 어려운게 정상이기때문에 
//노오력합시다.