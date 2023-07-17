
import React, { useRef } from 'react';
import axios from 'axios';
const Sign = () => {
    function asd(){
        const form =new FormData();
        axios.post("http://127.0.0.1:4000/signup", form, {
            headers: {
              "Content-Type": "multipart/form-data",
            }
          })
          .then((e)=>{
            console.log("Delivered successfully.")
            console.log(e.data);
          })
          .catch((err)=>{
            console.log(err);
          })
    }

    
  
  return (
    <div>
        <form action='http://127.0.0.1:4000/signup' method="post">
        <label htmlFor="name">이름</label> <br/>
        <input type="text" name="name" id="name" />
        <label htmlFor="age">나이</label> <br/>
        <input type="text" name="age" id="age" />
        <label htmlFor="userId">아이디</label> <br/>
        <input type="text" name="user_id" id="userId" />
        <label htmlFor="password">비밀번호</label> <br/>
        <input type="password" name="user_pw" id="password" />
        <button onClick={asd} id="uploadBtn"> 회원가입 </button>
        </form>
    </div>
  );
}

export default Sign;


