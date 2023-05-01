// 정규 표현식(RegExp) 객체
// 문자의 패턴을 검색하기위해 사용하는 문자.
// 예) 회원가입 email id 주소같은 형식으로 입력하기위해 
// 문자의 패턴을 정의하는데 유용하다

// 정규 표현식의 메소드 
/*
search(), replace(),                     boolean 값
test() 정규표현식과 일치하는 문자가있으면 true 반환
*/

// 정규 표현식

// 첫번째 방법
let reg1 = /a/;

// 두번째방법
let reg2 = new RegExp('a');

// 위처럼 이렇게 정규표현식을 만드는이유는 규칙을 가진
// 문자열을 찾기위해서

let tempReg=/[3,6,9,10,11]/;
// {} 내부중의 한개 -> 3 or 6 or 9 or 10 or 11중에한개 
// 그중에 한개

let tempReg1= /[0~9]/;
// 0~9 이렇게 작성하면 
// 0부터 9까지 라는뜻 

let str= "Hello JavaScript Program...";
// search 해당문자열의 위치를 찾는메소드
// 인덱스로 찾는 함수
let regExp_search = str.search(/JavaScript/);
console.log(regExp_search);

let regExp_replace = str.replace(/JavaScript/,'CSS');
//replace 첫번째 매개변수로 전달한 문자열을 찾아서
// 두번째 매개변수로 전달한 문자열로 바꿔준다.
console.log(regExp_replace);

//test
// 정규식 패턴에 대한 문자열 검색 반환겂은 true false 반환한다.
let reg3=/JavaScript/;  // 자바스크립트라는 문자열있는지 찾아서 있으면 treu 없으면 false
let reg4=/JavaScript2/;

console.log(reg3.test(str));
console.log(reg4.test(str));

// 정규식 표현할때 플래그
// 검색에 대한 옵션설정
// i : 대소문자 구분안하고 비교할수있다.
// g : 전체 문자열을 정규식과 비교한다. 첫번째로 일치한 문자열이 있으면 비교를 중단.
// m : 줄이 다른 여러줄의 문자열을 정규표현식으로 비교한다.

let str2 = 'The best program is \n JavaScript..';

//플래그는 정규식 뒤에 붙인다.
let temp1 = /javascript/i;

//match : 해당 문자열을 찾고 배열의 형태로 반환해준다.
console.log(str2.match(temp1));


// match 문자열을 찾지못하면  null
let temp2= /JavaScript/g;
console.log(str2.match(temp2));

//줄이 다른 문자열을 비교한다.
let temp3= /JavaScript/m;
console.log(str2.match(temp3));

//정규식의 패턴
// [abc] : 대괄호 안에 있는 문자들을 찾는다.
// [0-9] : 대괄호 사이의 숫자를 찾는다.
// [x|y] : 문자중에서 | 분리된 문자중 하나를 찾는다. 

let str3 = "The best Program is javascript and HTML..1231232132131."
//플래그를 여러개 주고싶으면 같이 작성한다 ex ) ig im등등
let temp4 = /javascript/ig

// 전체 문자열에서 javascript만 가져왔다.
console.log(str3.match(temp4));

//문자열안에 해당하는 것을 다 찾아온다.
let tmep5 = /[A-K]/ig;
console.log(str3.match(tmep5));

//분리된 문자열을가져온다.
let temp6 = /p|x|z/ig;
console.log(str3.match(temp6));

//정규식에서 메타문자.

//메타문자는 숫만 이거나 알페밧만이거나 숫자를 제외하거나 이런등등 속성을 
// 표현한다. 
/*
  ^문자 : 정규식으로 시작문자를 찾는다 .^뒤에 있는문자로 시작하는 문자를찾는다
  문자$ : 정규식으로 끝나는 문자를 찾는다. $앞에 문자로 끄탄느 문자열을찾는다.
 \w : 모든문자를 찾는다, 속하는 모든 문자를 찾는다
 \W : 알파벳 대소문자, 숫자 _문자를 제외한 모든 문자를 찾는다.
 \d : 숫자를 찾는다.
 \D : 숫자를 제외하고 찾는것(모든 문자를 찾는다);
 \s : 공백 문자를 찾는다
 \S : 공백 문자를 제외하고 찾는다.
  */

 // 문자열이 T로 시작하는지 확인을하고 T가 맞으니까
 // 맞는 문자열 반환
 let temp7 = /^T/ig;
 console.log(str3.match(temp7));

 let temp8= /\d/ig;
 console.log(str3.match(temp8));

 //정규식을 검색해서 사용함 보통