import React,{createContext,useContext, useState} from 'react'

// useContext react에서 제공해주는 내장 hook함수이다.
// 전역상태 관리를 도와주는 함수
// 리액트는 데이터의 흐름이 단방향 자식에게 props로 전달하기떄문에 불편하다.
// props로 데이터를 넘겨주지않아도 컴포넌트들이 데이터를 공유할수있도록 .
// 
// 글로벌이라는 context객체 생성
export const Global = createContext() 
const Context01=()=>{
    return<>
        <Context02></Context02>
    </>
}
const Context02=()=>{
    const {name,setname}= useContext(Global);
    // Global.Provider value로 전달한 값을 받기위해
    // useContext() 매개변수로 context객체를 전달해준다.
    return<>
        내이름은 {name} 
        <button onClick={()=>{setname("soon2")}}>버튼</button>
    </>
}

const Context = () => {
    //Context 최상단 부모 컴포넌트
    const [name,setname]=useState("wook");
    //부모의 상태변수
    const obj= {
        name,
        setname
    }
    // 부모의 상태 변수 name과 상태변수 업데이트 함수 setName를 객체의 카값으로 obj객체에 선언
  return (
    // 안에 애들에게 값을 주입시킨다??
    // 전역상태를 관리할때 Global.Provider를 최상단 트리로 감싸주고
    // value는 정해진 키 전달할 데이터를 넣어준다.(전역상태)
    <Global.Provider value={obj}>
        {/* <div>Context</div> */}
        <Context01></Context01>
    </Global.Provider>
  )
}

export default Context