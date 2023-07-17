import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch ,useSelector} from 'react-redux'

const LoginForm = () => {
  const [userID, setUserID] = useState("");
  const [password, setPassword] = useState("");
  const [stat,setStat] =useState("");
  const dispatch = useDispatch();
  const count = useSelector(state => state.login.isLogin);
  const handleSubmit = async(event) => {
    event.preventDefault();

    // Perform the login request here using the state values
    // await axios.post("http://127.0.0.1:4000/login", {
    await axios.post("/login", {
        user_id: userID,
        user_pw: password
    }, {
        withCredentials: true 
    })
      .then(response => {
        // Handle response here
        console.log(response);
        setStat(response.data.message);
      })
      .catch(error => {
        // Handle error here
        console.log(error);
      });    
  };
  const handlerLogin=(stat)=>{
    dispatch({type:"LOGIN",payload:{userID,password,stat}})
  }
  const handlerLogOut=(stat)=>{
    dispatch({type:"LOGOUT",payload:{stat}})
  }
  useEffect(()=>{
    console.log(stat);
    if(stat==="로그인성공")
    {
        handlerLogin(stat);
    }else if(stat==="로그인실패")
    {
        handlerLogOut(stat);
    }
    console.log(count);
  },[stat])

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="userId">ID</label> <br/>
      <input type="text" name="user_id" id="userId" value={userID} onChange={e => setUserID(e.target.value)} /> <br/>
      <label htmlFor="password">Password</label> <br/>
      <input type="password" name="user_pw" id="password" value={password} onChange={e => setPassword(e.target.value)} /> <br/>
      <button type="submit"> Login </button>
      <span id='test'>{count}</span>
    </form>
  );
};

export default LoginForm;
