import React from 'react'
import { useDispatch } from 'react-redux'
// 저장소 만들떄는 redux 리액트에서 편안하게 사용할떄는 react-redux

// 전역상태에 있는 값을 업데이트 해줄건데
// useDispatch 액션을 보낼수있게 react hook 함수를 사용하자
const Count = () => {

const dispatch = useDispatch();
// dispatch 함수를 사용해서 action 을 던질수있다.
// dispatch 함수를 사용할때 매개변수로 객체를 전달해주자.
// 객체의 규칙은 {type,payload}
// type: 동작 시킬 행동의 이름
// payload : 선택사항 있어도 되고 없어도 됨 상태를 변경할때 데이터 전달이 필요하면 사용

const handlerAdd = ()=>{
    dispatch({type:"김치"})
}
const handlerRemove=()=>{
    dispatch({type:"계란"})
}
  return (
    <div>
        <button onClick={handlerAdd}>감차</button>
        <button onClick={handlerRemove}>계란</button>
    </div>
  )
}

export default Count