import React from 'react'
import { Body, Header } from '../Components'

const Login = ({login,setLogin}) => {
  return (
    <div>
        <Header name={'로그인'}/>
        {/* 자바스크립트가 코드를 읽는 과정에서 함수에 괄호가 있을 경우
            jsx에서 중괄호는 자바스크립트를 사용하겠다고 알려주는 것
            함수에 괄호를 쓰면 함수 실행식으로 받아들여서 함수를 실행시킨다.
            매개 변수가 필요한 경우 익명함수로 해당 함수를 감싸서 전달하면 된다.
        */}
        <button onClick={()=>{setLogin(!login)}}>로그인/로그아웃</button>
        <Body path={'/'} name={'메인'} login={login}/>
    </div>
  )
}

export default Login