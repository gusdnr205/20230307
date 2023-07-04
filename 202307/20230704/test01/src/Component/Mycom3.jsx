// Es7 react/redux/  <- extension

//rcc 클래스형 컴포넌트
//rafce 함수형 컴포넌트 자동행성

// react arrow function 
import React, { useState,useEffect } from 'react'
// 함수형 컴포넌트에서 state와 props 의 값은 어떻게 관리해야하나?
// react hook useState , useEffect
// useState 상태값을 만들어준다. 상태값을 수정할떄 사용할 메서드를 만들어준다.
// useEffect 라이프사이클을 지원해준다. 
    
// 함수형 컴포넌트의 porps값은 함수의 매개변수로 전달된다.
// 구조분해 할당해서 바로 사용해도 상관없다.
const Mycom3 = (props) => {
   
    console.log(props);
    // 변수선언
    let count=0;
    // 다시 리렌더링 되면 코드를 다시 실행시키는 과정에서 변수가 다시 선언된다.
    // useState : 첫번쨰 반환값이 상태변수 두번쨰 값은 상태변수를 업데이트 할 setstate함수
    // useState : 매개변수로 전달한 값이 초기값 아래의 경우 매개변수가 0일경우 Num이 0 1일경우num이 1
    // setstat 로 초기값을 실해주지않는다면 count가 초기화 되지않았다 왜?
    const[num, setNum] = useState(1); 
    const [active,setActive] = useState(false);
    // useEffect 라이프 사이클함수
    // 함수를 매개변수로 전달하고 useEffect의 첫번쨰 매개변수 함수를 전달하고 , 두번쨰 매개변수 , 배열의 배열을 전달한다.
    // 첫번쟤로 전달한 함수를 두번쨰 매개변수의 상태를 확인하고 실행시킨다.
    // [] 빈배열을 전달한 경우 componentDidmount
    // [num] 배열에 전달된 값이 수정된 경우 에 실행 componentDidmount. componentDidupdate
    // [num] 배열에 전달한 값만 주시한다. 
    useEffect(()=>{
        console.log("componentDidmount");
    },[])
    useEffect(()=>{
        //num이 변경된 경우 이 업데이트 함수만 실행된다.
        // 제어문을 사용해서 만들어준다. componentDidupdate
        //상태가 변환이후의 값을 사용하는 라이프 사이클함수
        console.log("componentDidmount","componentDidupdate");
        console.log("나는 num",num)

    },[num])
    useEffect(()=>{
        //active가 변경된 경우 이 업데이트 함수만 실행된다.
        console.log("나는 액티브",active);
    },[active])
    
    useEffect(()=>{
        //num이나 active나 둘중 하나라도 변경되면 실행된다.
        console.log("num이나 active가 변경됐어");
    },[num,active])
    function clickHandler(){
        console.log("클릭함");
        setNum(num +1);
        // 상태를 변경
        // 상태값을 사용하는이유
        // 이전의 상태값이 보관이된다
        // 상태값이 계속유지
        count++;
        console.log("count",count);
        // 실수가 많으니까 주의 상태값을 수정하고 바로 사용하면안된다.
    }
    function activeHandler(){
        setActive(!active);
    }
  return (
    <div><button onClick={clickHandler}>클릭</button>
    <button onClick={activeHandler}>활성화/비활성화</button>
    </div>
  )
}

export default Mycom3