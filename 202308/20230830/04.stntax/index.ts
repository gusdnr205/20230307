// javascript
let num = 20;
const str = "javascript";
const nan = NaN;
const infinity = Infinity;
const bool = false;
const nullValue = null;
const undefinedValue = undefined;

const obj = {};
const arr = [];
// any 모든 타입을 지정해줄수있음
const fn = (a: any) => {
  console.log(a);
};

const sum = (a: any, b: any) => {
  return a + b;
};

const any = "";

const unknown = "";
//typescript
let num2: number = 20;
const str2: string = "typescript";
const nan2: number = NaN;
const infinity2: number = Infinity;
const bool2: boolean = false;
const nullValue2: null = null;
const undefinedValue2: undefined = undefined;

const obj2: object = {};
// 배열은 어떤 타입이 들어갈지 저장해줘야한다. 제네릭 t <T> ex)number>
// <> : 제네릭 타입 설정 배열의 요소가 number 라고 지정 (데이터 타입을 매개변수 화 시킬수있다.)
const arr3: Array<number | string> = [];

const arr2: Array<number> = [];
// const fn2 = (a: number):void => {} void는 : 함수 실행시 반환값이 없는 함수라는것을 의미
// 반환값이 없는 함수라는것
const fn2 = (a: number) => {
  console.log(a);
};
// :number  반환값이 숫자여야한다.
// 함수명 =():retur의 타입 지정 =>{};
const sum2 = (a: number, b: number): number => {
  return a + b;
};

// any : 어떤 타입이든 할당할수있다. 되도록 남발하지말자 타입의 안정성이 보장되지않는다.
const any2: any = "";
// unknown : 어떤타입이든 할당가능 타입의안정성보장
const unknown2: unknown = "";
console.log(any2.length);
// 어떤 타입인지 모르기떄문에 길이를 부름녀 위험하다고 알려준느것
if (typeof unknown2 === "string") console.log(unknown2.length);
