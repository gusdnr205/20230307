// 스르레드 연산자

let obj ={name:'wook',content : "내용"};

let obj2 =obj;
obj2.name="kim";

//객체는 주소를 참조하는 래퍼런스타입
console.log(obj);
console.log(obj2);
console.log(obj==obj2);
// ... 스프레드 연산자 구문
let obj3={...obj};
//값을 복사해서 새로운 객체륾 만들어준것. 주소 참조 x 
obj3.name="kim2";
console.log(obj);
console.log(obj3);
console.log(obj == obj3);

//스프레드 연산자를 사용하면 원본을 유지하고
// 작업을 진핼할수있다.
//데이터베이스에서 값을 가져와서 검색기능을만든다 가정하면
// 모든 리스트를 가지고있는 배열은 ㅇ지하되
//검색으로 걸러낸 배열만 사용하고싶을때


// 리액트에서 많이 사용할것.
// 옵션 체이닝
// ES11에서 도입되었고 
// 객체의 값을 호출할때 안전성을 유지하면서 호출가능하다
// 객체의 키앞에 ? 구문을 추가해서 작성

let obj4 = {name:"sdd",content:"ㄴ용"};

//obj4?.name
//name의 키값이 있는지확인 없으면 undifined를 던집니다
//오류가 나지않게 방지해준다. 

//오류가 나지않는 이유는 객체의 키값을 확인하고
//tpye 에러가나지않게 방지해주기때문
console.log(obj4?.age);

let obj5 = {
    name: "asd",
    content:{
        age:1
    }
}

console.log(obj5?.content.key);
// node환경에서 보여주자.

