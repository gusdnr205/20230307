import React from 'react'
import { useDispatch } from 'react-redux'

const Menu = () => {
    const dispatch = useDispatch();


const handlerAdd = ()=>{
    dispatch({type:"LOGIN",payload:true})
}
const handlerRemove=()=>{
  // 객체를 전달하면 reducer의 action에 들어온다.
  // payload에는 그냥 담고싶은거 담으면된다.
    dispatch({type:"LOGOUT",payload:false})
}
const handlerkimchi=()=>{
    dispatch({type:"김치"});
}
  return (
    <div>
        <button onClick={handlerkimchi}>김치</button>
        <button onClick={handlerAdd}>로그인</button>
        <button onClick={handlerRemove}>로그아웃</button>
    </div>
  )
}

 

export default Menu

