// 이러블 과 이터레이터 ES6에 추가되었고 
// 이터러블은 반복이 가능한 객체라는 뜻.

// 이터러블을 반복하는 반복문
// forEach : 배열을 순회하면서 아이템을 반복실행한다. 아이템의 갯수만큼
// for of : 이터러블의 아이템을 반복실행한다.
// 등등 

// symbol : ES6 에 추가된 원시타입
// 값이 겹치지않고 
// 선언되고 변경이 불가능.
// 객체의 속성에 접근하기위해서 사용.

// 반복자 symbol.iterator : 이터러블 객체를 나타내는 매서드 이름으로 사용
//                          해당 객체가 이터러블 이라는것.

// symbol.iterator 메소드가 이터레이터 객체를 반환한다.
// 이터레이터 : 이터러블 객체의 각 아이템의 접근하기 위한 기능
// 이터레이터 객체의 next 메소드가있어요.
// next 메소드를 사용하면 {value, done} 객체를 반환한다.
// 반복중인 아이템을 value에 주고 done은 끝났는지를 알려준다.
// 이터레이터는 이터러블(반복 가능한 객체)를 순차적으로 접근할수 있는 기능

// 자바스크립트의 배열이나 문자열 등등도 이터러블이라는것.

// 구조간단히 만등

// const Arr =[1,2,3,4,5];

// const objIter={
//     index:0,
//     next : function(){
//         if(this.index < Arr.length)
//         {
//             // done 마지막 요소가 맞니??
//             return {value: Arr[this.index++],done:false}
//         }
//         else{
//             // done 마지막 요소 끝
//             return{done:true};
//         }
//     }
// }

// let result = objIter.next();
// console.log(result.value, result.done);
// result = objIter.next();
// console.log(result.value,result.done);
// result = objIter.next();
// console.log(result.value,result.done);
// result = objIter.next();
// console.log(result.value,result.done);

// result = objIter.next();
// console.log(result.done);

// 이터러블 작성
const Arr2=[1,2,3,4,5];
// symbol은 객체의 속성에 접근한느데 사용한다했음.
// 객체의 속성으로 접근하는데 symbol.iterator

// Arr2[Symbol.iterator]() 이터레이터 객체를반환해준다.
// const iter2 = Arr2[Symbol.iterator]();

// let result2= iter2.next();
// console.log(result2);
// result2= iter2.next();
// console.log(result2);
// result2= iter2.next();
// console.log(result2);
// result2= iter2.next();
// console.log(result2);
// result2= iter2.next();
// console.log(result2);
// result2= iter2.next();
// console.log(result2);
// result2= iter2.next();
// console.log(result2);

// 어려운 개념?

// 값을 바꾸는데 편하고 적합한 함수
// reduce 함수 값을 바꾸는데 적합한 함수
// 예) 이터러블 이터레이터를 따르는 이터레이터 값이 value 가 
// 숫자라면 문자로도 바꿀수있고 여러가지 방법으로 값을 바꿀수있다
// 배열이나 객체와 같은 데이털르 줄일수있따.

const Arr3=[1,2,30,4,5,15,10];

//reduce 메소드
// 첫번쨰 매개변수가 콜백함수, 두번째 매개변수가 초기값을 넣어준다. 
// 배열의 0번이 들어간다. 초기값을 안넣으면 

//두 값을 더하면서 반환시키는 기능
// const temp3= Arr3.reduce(function(acc,value){
//     // acc 이전 결과값 return 된
//     console.log("acc" ,acc);
//     console.log("value" ,value);
//     //return "이전 결과값"
//     console.log(acc+value);
//     if (acc===33)
//     {
//         return 50
//     }else{
//         return acc + value;
//     }
// },0);

// 배열을 순회하면서 제일큰값을 반환시켜주는기능
// const max = Arr3.reduce(function(acc,value){
//     console.log("acc ",acc);
//     console.log("val ",value);
//     // 두개를 비교해서 값이큰지 확인하고 큰수를 반환
//     return acc>value?acc:value;
// });
// console.log(max);

// // 배열을 순회하면서 제일 작은 값을 반환시켜줌
// const min= Arr3.reduce(function(acc,value){
//     // 두개를 비교해서 반환값보다 작은지 비교
//     return acc<value ? acc: value;
// }
// )
// console.log(min);

const Arr4=[1,54,6,6,4,1,4];

let cajdfhjasd= Arr4[Symbol.iterator]();
console.log(Arr4);
console.log(
    cajdfhjasd.next()
);
console.log(
    cajdfhjasd.next()
);

console.log(
    cajdfhjasd.next()
);

console.log(
    cajdfhjasd.next()
);




console.log(Arr4.reduce(function(acc,value){
    

    console.log("acc : ",acc);
    console.log("value : ",value);
    return acc+value   
}))







console.log(Arr4[Symbol.iterator]().next().value,
Arr4[Symbol.iterator]().next().done

)


