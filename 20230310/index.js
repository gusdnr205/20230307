// 우리제일 많이 사용할 구문
// 개발자는 객체를 잘 사용하면된다.


// if 문 비교문

if(false){
//여기 있는 구문을 실행시키는 조건은
//if () 괄호안에 true냐  false의 차이로 실행을 시킨다.
    console.log()
    //불이 꺼져있으면 실행될일 자체가없다. 
    // 켜져있으면 실행될수도 있다.
// 여기 내용을 실행시키고 싶을때도 있고. 실행시키고 싶지않을때도 있다.
//아 괄호에다 연산자를 넣어주면 값을 비교하면서 실행시키거나
// 실행 안되게 할수 있겠구나?

}

let age = 1;
let age2= 10;

// age가 나라는 가정

// age보다 age2가 값이 크니까 true라서 if문 조건에 맞아.
if(age < age2){
    // 조건이 맞으니까 실행 
    console.log("내 나이가 더 어리구나")
}

//false 면 실행시키고 싶은데
// else "if가 아닐때" false일때
if(age > age2){
    // 조건이 맞으니까 실행 
    console.log("내 나이가 더 어리구나")
}else console.log("hahah")


// 참과 거짓말고 다른 비교

if(age > age2){
    // age가 age2보다 커야 실행
    // age가 더작기때문에 false
    // if문이 맞으면실행
}else if(age==age2){
    // 두값이 같을때 true 아니라면 false
    // if가 false 일대 else if 비교하고 실행
}else {console.log("age2가 더 나이가 많구만기래");}
    // else는 if else마져도 아닐때 실행


// 반복문 for문
// 여러번 반복 실행해야할 구문이 있을때 사용한다.
// 반복문중에 하나이고
// 증가되다가 비교문이 false로 안맞게되면 그때 반복문 종료
// 무한으로 반복시키면 사이트가 터짐 이러면안된다.
// for(let a=0;a<=9;a++){
//     console.log(a+"단 시작")
//     for(let b=0;b<=9;b++)
//     {
//         console.log(a+"x"+b+"="+a*b)
//     }
//     b=0;

// }


for(c=1; c<=81; c++)
{
    
    console.log();
}

let students=["가가","나나","다다"];
let award=["나나"];

for(i=0;i<3;i++)
{   
    console.log(students[i]);
    if(students[i]==award[0])
    {
        console.log("수상자는 "+award[0]);
        break;
    }
}

for(i=0;i<60;i++)
{
    
    if(i%3==0)
    {   
        console.log("짝");
    }else console.log(i);
}



let a=1
for(let i=1;i<10;)
{
    console.log(a+"  "+i+" ="+i*a)
    i++;
    if(i==9){
        if(a<=8)
        {
            console.log(a+"  "+i+" ="+i*a)
            a++;
            i=1;
            
        }
        
    }
 
}