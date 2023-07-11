import React from 'react'
import { LoginBoxWrap ,LoginBOxInput} from './Login.styled'
const LoginBox = () => {
  return (
    // width=(1000px) props 값으로 width는 키로 넘어가는데 "1000px" 그럼 스탙일 작업을할때
    // 동적으로 스타일 값을 주고싶으면 어떻게하지?
    <div ><LoginBoxWrap width="600px">
        <p className='login-title'>로그인 박스</p>
        <LoginBOxInput>버튼</LoginBOxInput>
        </LoginBoxWrap>index</div>
  )
}

export default LoginBox