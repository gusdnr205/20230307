// 배열 심화
// 배열 [1,2,3,4,5] 래퍼런스 타입
// 리스트 형태 
// 인덱스로 해당 값에 접급할수 있다.
// 우리는 1부터 숫자를 셌는데
// 배열은 0부터 숫자를센다
// 인덱스 0~ 배열의 길이까지
// 다른 언어에서 c,c++,c## 등등~
// 배열이 list타입이 있는데
// 자바스크립트에서는 Arr타입이 있는데 
// 사용자가 편하게 접근하기 위해서 조금 허술한 부분이 있다.
// 자바스크립트의 배열은 객체 키값이 0 1 2 3
// 자바스키릅트의 배열안의 배열은 객체배열이다.
// 예를 들어 다른언어의 배열 int a[0][1];
// 자바스크립트
let a = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

// 우리는 이중배열이라고부른다.
// console.log(a[0][1]);
// console.log(a[1]);
// console.log(a[2][0]);
// a[0]===[1,2,3] 
// a[0][0] === [1,2,3]의 0번 인덱스 즉 1이 나온다.
// 대부분 이중배열까지만 사용한다.

// 배열에는 length라는 키값이있다.
// 배열의 총길이를 알려줍니다.
// console.log(a.length);
// 배열의 인덱스 접근할때는 0 ~ (배열의 길이 -1)
// 길이1,2,3
// 인덱스 :0 ,1, 2 ,3 

// 반복문에 숫자를 바로 이렇게 작성하게 되면 
// 반복문의 반복횟수를 동적으로 변경하기 힘들다.
let b = [1, 2, 3, 4, 5, 6, 7];
// 길이가 변경되는 상황이 발생했는데
// 반복문은 7번 돌아가기때문에
// 배열의 길이가 8로 늘어나게 되면 마지막 값을 가져올수있다.
// 배열의 길이가 변해도 b.length 키값으로 배열의 길이를 가져올수있다.
// 그럼 반복문을 정상적으로 배열의 길이만큼 반복시킬수 있다.

b.push(8);
b.push(9);
// push(8); 이제 알겠다 외웠었는데
// push(8); // 함수구나? 배열 메소드
// 배열타입의 함수
// 함수도 값입니다.
for (let i = 0; i < b.length; i++) {
    console.log(b[i]);

}

// 객체 

// const 한번 선언하면 값을 변경할수없다. 재선언 또한 안된다.
// 상수의 값

// 객체는 키와 값이 있다.

const obj = {
    a: "나는 객체야",
    // 익명함수 : 이름이 없는 함수
    push: function (num) {
        console.log("나는 obj 객체 안에 push라는 키값에 있는 함수야");
        console.log(num + " 를 매개변수로 받았어 ㅎㅎ");
    }
}


obj.push(2);
console.log(obj.a);


let d = [1, 2, 3, 4, 5];
// 배열의 인덱스에 있는 값을 찾아서 구해주는 함수
// return 변수명으로 쓰면안된다.

// 배열 0~배열의 길이까지있는데 
// 배열의 값을 찾아서 위치를 리턴
let return2 = d.indexOf(3);
// 해당 값을 찾아서 배열의 인덱스를 반환한다.
console.log(return2);

let arr = ["사과", "딸기", "포도"];

let return3 = arr.indexOf("딸기");
// 딸기라는 값의 인덱스를 알고싶어
console.log(return3);

// 배열 메소드 find 
// 검색할때 사용할 함수
// 함수 반환값이 true나오는 함수를 넣어주고

//find 라는 함수는 매개변수로 함수를 전달받는다.
let return4 = arr.find(function (item) {
    // 배열의 값이 순서대로 들어온다.
    // item매개 변수에
    console.log("item" + item);
    // return 값이 true의 값이 반환되면 해당 아이템을 반환해준다.
    return item === "딸기";
});
// return 이 true 이면 사과를 반환하는데 첫번째값이기때문이다 트루가되는
// item=이 딸기이면 딸기까지 찾고 종료된다 까지라는 말은 그이전값도 출력한다. 

console.log(return4);

let return5 = arr.findIndex(function (i) {
    console.log("return5: " + i);
    return i === "딸기";
})
// 해당 배열을 반복시키면서 값을 찾고 그 값의 인덱스를 반환해준다.
console.log("return5 index값 :" + return5);


let arr2 = ["이사가", "김딸기", "이포도"];
// 배열 메소드 fillter
let str = "가나다";
// 문자열도 인덱스로 한자한자 접근이가능하다.

console.log(str[0]);
let return6 = arr2.filter(function (i) {
    return i[1] === "사";
})

// fillter 검색창같은 알고리즘을 구현할때 사용할거같다.

//원하는 값을 모두 찾아서 반환해준다.

console.log(return6);

// 배열 메소드 map

let return7 = arr2.map(function (item) {
    console.log(item);
    // 반환값들을 배열의 형태로 반환해준다.
    return item[0] === "이";
})
// 반환 값이 나오면 배열의 길이만큼 채워서 반환
console.log("return7 " + return7);

// 배열 메소드 foreach
// 해당 배열을 반복시켜서 작업해야할 경우 유용하게사용된다.
// for(let i=0;i<arr2.length;i++)
// {
// // 증가하는 값을배열의 인덱스로 줘서 값을확안했는데 
// console.log(arr2[i]);
// }

arr2.forEach(function (item) {
    console.log(item);

});
// 배열의 길이만큼 반복하면서 값을 뽑아준다 
// 값을 바로 사용할수있다.
// 아이템을 순차적으로 뽑아준다.

// 배열의 메소드 
// join 함수는 매개변수로 문자열을 전달해준다.
console.log(arr2.join("."))
// 배열을 문자열로 변경시켜준다. 
// 배열에 들어있는 값들의 구분을 매개변수로 전달한 문자열로 해준다.
// 

let str3 = arr2.join(".");
// split 함수
// 문자열을 배열로 변경 
// split 함수의 매개변수의 값을 기준으로 문자를 자른다. 
// 결과는 배열로 나온다.
console.log(str3.split('.'));

let nums = Array(20).fill();
console.log(nums);
let con = nums.map(function (item, index) {
    return index;
})
console.log(con);

let obj3 = {
    a: function (num) {
        let index = 2;
        num(index);
    }

}

obj3.a(function (i) {
    console.log(i + " 나 실행되니?")
})

let obj4 = {
    a: function (num) {
        let index = 2;
        num();
        num(index);
    }
}

obj4.a(function (i) {
    console.log(i + "나 실행중 ")
})


// obj4라는 객체 안 a라는 익명함수 num을 매개변수로 받는다 
// 매개변수로 받는것을 




//a1을 매개변수로 받는 콜백 함수 만들고 이 함수의 리턴값을 
//익명함수의 매개변수로 적용하여 a1과a2의 중복아닌값을 return해주세요
let a1 = [1, 2, 3, 4, 5];
let a2 = 3;

function returnToa2(a2) {
    return a2;
}

let obj5 = {
    a: function (c) {
        c();
    },
    b: function(c,d){
        console.log("매개변수 d는 이거야: "+d);
        c(d);
    }
}



obj5.a(function(){
    let result;
    result=a1.filter((value) => value !==returnToa2(a2))
    console.log(result);
    // a1.filter(function (i) {
    
    //     if(i !== returnToa2(a2))
    //     {
    //         console.log(i);
    //         return i;
    //     }
    // })

}

);

obj5.b(function(index){
    let result;
    console.log(index);
    result=a1.filter((value) => value !==index)
    console.log(result);
},returnToa2(a2));




const numbers = [1, 2, 3, 4, 5];

let num10=[];

num10=numbers.filter(function(i){
    return i%2===1;
    }
);
console.log(""+numbers);
console.log("num10: "+num10);