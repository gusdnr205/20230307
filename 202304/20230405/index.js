// 프로토타입
// 자바스크립트의 객체는 프로토 타입을 상속받는다.
// 겍체의 원형

// object.protoype
// function car(model,color,speed)
// {
//     this.model = model;
//     this.color=color;
//     this.speed=speed;
//     this.accel=function()
//     {
//         this.speed-=10;
//     }

// }

// //생성자함수로 동적할당해서 생성
// let temp = new car("벤츠","흰색",200);
// let temp2=new car("모닝","검정",200);

// console.log(temp);
// console.log(temp2);

// function car(m,c,s){
//     this.model=m;
//     this.c=c;
//     this.s=s;
//     this.speedUp=function(){
//         this.s+=10;
//         return this.s;
//     }
// }

// let temp = new car("마티즈","레드",150);
// // battery 키 true 값 추가
// temp.battery= true;
// temp.speedUp = function(){
//     this.s+=20;
//     return this.s;
// }

// console.log(temp);
// temp.speedUp();
// console.log(temp);

// 이런 방식은 객체에 새속성을 추가할수 있는데
// 원형에 추가는 할수가없다.

function car(m,c,s)
{
    this.m=m;
    this.c=c;
    this.s=s;
}

//프로토타입의 정의 기본형식
// 객체명.protype.메서드=function(){

// }
// 이 원형을 가진 객체들은 전부 프로토타입을 추가한 메소드를 사용할수있다.
// 생서자에 의해 생성된모든객체는 생서자 함수의 모든 속성과 
// 메소드를 상속 받는다.
// 각 객체는 상속된 속성과 메소드를 메모리에 저장해놓고
// 동일한 메서드 메모리에 저장을하고 중복 저장을 피한다,
// 생성자함수의 메서드를 정의하지않고 생성자외부의
// 별도의 메서드를 정의해서 사용하는 방법이 프로토타입.

car.prototype.speedUp=function(){
    this.s+=20;
    return this.s;
}
car.prototype.speedDown=function(){
    this.s-=20;
    return this.s;    
}
let temp2= new car("다마스","검정",100);
let temp = new car("봉고","검정",100);
console.log(temp.speedUp());
// 객체에 추가 stop 메소드를
temp.stop= function(){
    this.s=0;
    return this.s;
}
//car생성자들로 만들어진 모든 객체에 메서드를 추가해야할때 
// 프로토타입으로 원형에 메서드 추가가능

car.prototype.stop=function(){
    this.s=0;
    return this.s;
}

console.log("temp",temp.stop());
console.log("temp2",temp2.stop());

String.prototype.replaceof = function(){
    console.log('난 프로토타입으로 추가되었어');
    return;
}

//문자열의 원형은 String이고 
"가나다".replaceof();

