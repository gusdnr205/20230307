// 생성자 함수를만들고
let objarr=[];

function create(name,age,content){
    this.name=name;
    this.age= age;
    this.content=content;
    
}

// 객체를 만들수 있다.

function divbtn(){
    // 버튼누르면 실행 시킬 기능
    console.log("나 눌렀어?");
    addArr();
    //화면 업데이트 하기위햇 만든함수
    render();
}

function addArr(name,age,content){
    // new 키워드로 빈객체를 만들고
    // 함수에서 this로 그 객체를 참조해서 
    // name키에는 값을 매개변수로 "이름"
    // age 키에는 값을 매겨변수로 10
    // content 키에는 값을 매개변수로 "나 컨텐츠"
    // 매개변수로 전달해서 키값을 추가해준다 빈 객체에
    // obj라는 변수에 만들어진 객체를 넣어준다.

    //input 태그명으로 querySelectorall메소드 매개변수로 전달해서
    //input 태그들을 배열로가져온다. 가져와서 inputs 변수에 담아놓고

    let inputs = document.querySelectorAll("input");
    console.log(inputs)

        // input 태그는 value 라는 키값이 있다.
        // input에 입력한 값이 value키에 값으로 담긴다.
        console.log(inputs[0].value);
        console.log(inputs[1].value);
        console.log(inputs[2].value);
    let obj = new create(inputs[0].value,inputs[1].value,inputs[2].value);
    objarr.push(obj);
    console.log(objarr);
    //객체와 배열은 래퍼런스 타입이기때문에 값이 아니라 
    // 주소를 들고있다.
    // 원시타입
    // 저렇게 보이는 현상은 일반 변수는 값을 가르키는 주소
    // 주소를 console에 찍기때문에 주소를 바라보면 마지막으로 
    // 변환값을 확인할수있다. 
   // 값을카르키는 친구주소
   // 변수명
}


// 무언가를 그려주는 함수
// render이름 내맘대로 정한거.
function render(){
    // 랜더링 하기전에 문자열 초기화
    let text="";
    // += 원래 있는값에 추가를 시켜준다.
    // ++ 5
    objarr.forEach(function(i){
        text += `<li> 이름은:  ${i.name} 나이: ${i.age} 내용: ${i.content}</li>`
        
    }
    
    
    )
    console.log(text);
    //여기서 사용할것 text지역변수

    document.querySelector('#tables').innerHTML = text;
    }





//페이지 만들기
//표를 만들고
//ul li 사용해서 표를만들고 
//input에 이름 나이 성별 내용 안경썻늕 작성해서 받고
//표에 추가되게 내용이 한줄한줄 