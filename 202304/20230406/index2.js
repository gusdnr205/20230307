// 우리 배열 메소드 좀서 사용해보자.

// 배열메소드가 제일 많이 사용됩니다.

// Array.of();
// 전달된인자를 요소로 가지는 배열을 만들어준다.
// 배열을 생성할때 

const arr=  Array.of(1,2,3,4,5,6); // 우리가선언하는것 
                                //배열을 생성해주는 메소드
console.log(arr);

// 배열의 원본 배열을 수정하는 메소드
// 결과 겂으로 새로운 배열을 반환시켜주는것이 아니고
// 원본 배열을 수정하는 메소드 원본수정
arr.push(2);
console.log(arr);

const result =arr .concat(5); 
// 원본 배열 수정 ㄴㄴ 새로운 배열생기고 반환된다.
console.log(arr);
console.log(result);
// 래퍼런스 타입
console.log(arr== result);


// 참조타입은 값을 비교하는게 아니고 주소를 비교한다.
let a =[1,2,3];
let b=a;
let c= [...a]; // 스프레드 연산자 값만 복사
console.log(a == b); // 같아요

const foods = ["apple","orange"];

//foods 배열에서 banana 가있는지 확인
if(foods.indexOf("banana")=== -1)
{
    //없으면 추가해라
    foods.push("banana");
};
console.log(foods);

// ES7에 도입 includes 
// banana가 배열에 있으면 true 없으면 false
console.log(foods.includes("banana"));

// 있는지 없는지 확인할때 사용하면 좋겠다.
if(foods.includes("banana"))
{
    foods.push("banana");
}

// 배열에 추가할때 push 메소드를 사용하는데
// 자바스크립트에서는 index 에러가 따로 뜨지않는다 정재진 사이즈가 없기때문에
const arr2=[1,2,3];
// 배열의 인덱스는 갯수 -1
// 0 1 2
// 0 1 2 3
arr2[arr2.length] = 3;
// 배열의 끝에 추가하지않고 더 이후의 인덱스의 값을 추가하면
// 중간 값들은 비어있다.
console.log(arr2);

// 배열의 마지막 요소를 제거하는 메소드
// 원본이 수정되는 메소드
const arr3 = [1,2,3,4,5];
arr3.pop();
console.log(arr3);

// 첫번째 요소를 제거하고싶어
// shift 메소드 첫번째 요소를 제거해준다.
arr3.shift();
console.log(arr3);

const arr5 = [1,2];
const arr6 = [3,4];
const arr7 = arr5.concat(arr6);
// 배열 이어붙일대 concat을사용 
// 예 판매상품의 리스트가있는데
// 원본배열을 수정하면안되고
// 가전 식품리스트가 따로있고
// 우리가 전체 상품리스트를 뽑아서 이벤트 성이나
// 전체 상품 페이지를 구현해야할때
// 원본은 유지하고 새로운 리스트르 만들수있다.
console.log(arr7);

// 원본 배열의 중간 값을 제거 추가 하는경우
// splice 

const arr8=[1,2,3,4];
const result2 = arr8.splice(1,2,20,30);
console.log(arr8);
// 1,2 인덱스를 제거하고
// 20과 30의 값을 추가한것
// 함수의 반환은 제거한 요소들이 반환된다.
console.log(result2);

const arr9 =[1,2,3,4];
const result3= arr9.splice(1,2);
console.log(arr9); // 제거당한 원본 배열
console.log(result3); // 함수의 반환겂으로 제거한 요소

// 배열에서 특정요소 제거 함수
const arr10= [1,2,3,1,4,5,50,6];
function remove(arr,item,inItem){
    // 제거할 itme의 인덱스
    // indexOf
    const index= arr.indexOf(item);
    if(index !== -1 ) arr.splice(index,1);
    return arr;
    
}

console.log(remove(arr10,50));

// 매개변수로 전달받은 범위의 아이템을 복사해서 배열을 반환해주는 함수 
// slice 원본 배열을 변환x
const arr11= [1,2,3];
// arr3.slice(0,1);
console.log(arr11.slice(0,2));

//join 메소드 원본 배열의 모든 요소를 문자열로 변환
const arr12=[1,2,3,4];
const result12=arr12.join()
console.log(result12);

// reverse() 배열을 뒤짚어주는 메소드
// 배열 뒤짚기
console.log(arr12.reverse());

const arr13 = [1,2,3,4,5];
// fill 메소드 ES6 인자로 전달받은 값을 배열의 처음부터 끝가지 채워준다.
arr13.fill(1);
// 갯수를 유지하면서 초기화할때도 사용할수잇다, fill 0 
console.log(arr13);

//ES6 
// [1,2,3,4,5,[4,4]] == [1,2,,3,,4,5,4,4]
// 변환해주는 함수 flat() 배열의 뎁스를 맞춰춘다 . 1차 배열로
const arr14 = [1,[2,3,4],[3,[4]]].flat().flat(); // flat(2) 인자로 depth 넣어서
                                                 // 끄집어낼수있다.
// falt 메소드를 이용해서 하나의 배열로 만들어주자.
const arr15=[[[[[[[[[[1]]]]]]]]]].flat(Infinity); // 뎁스가 몇개든 다꺼내준다.
console.log(arr14);
console.log(arr15);
