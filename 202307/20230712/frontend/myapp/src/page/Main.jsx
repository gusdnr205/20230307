import React from 'react'
import {Link} from 'react-router-dom';
const Main = () => {
  return (
    <div>Maindddddddd
       <Link to = {"/SignUp"}> 회원가입</Link>
       <Link to = {"/login"}> 로그인</Link>
       <Link to = {"/board"}>게시판</Link>
    </div>
  )
}

export default Main