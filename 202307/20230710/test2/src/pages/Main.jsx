import React from 'react'
import {Link,Navigate, redirect,useNavigate} from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux'
import Order from './Order';

const Main = () => {
    const dispatch=useDispatch();
    const navigate=useNavigate()
    const handlerAdd = ()=>{
        dispatch({type:"LOGIN",payload:true})
    }
    const handlerRemove=()=>{
      // 객체를 전달하면 reducer의 action에 들어온s다.
      // payload에는 그냥 담고싶은거 담으면된다.
        dispatch({type:"LOGOUT",payload:false})
    }
    const userdata= useSelector(state=>state);
    const Redirect = ()=>{
       console.log(userdata);
        return  userdata.isLogin ===true ? navigate('/order') : <Navigate to={'/main'}/>
    }
  return (
    <div>Main입니다!!!!!!!!
        <button onClick={Redirect}>주문페이지로 이동</button>      
        <button onClick={handlerAdd}>로그인</button>
        <button onClick={handlerRemove}>로그아웃</button>

    {/* <Link to = {"/order"}> 주문페이지로 이동</Link> */}
    </div>
  )
}

export default Main