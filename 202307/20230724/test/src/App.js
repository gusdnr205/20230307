import './App.css';
import {produce} from "immer";
import {add,remove,add2,remove2,temp , login,logout,createcontent,removecontent,editcontent} from "./features/countSlice"
import { useDispatch, useSelector } from 'react-redux';
import React, { useState, useEffect } from 'react'
function App() {
  const dispatch = useDispatch();
  const num= useSelector(state=>state.count.num);
  const num2= useSelector(state=>state.count2.num);
  const value= useSelector(state=>state.count2.value);
  const boardcontent=useSelector(state=>state.board.content)
  const loginstate=useSelector(state=>state.login.loginstate)
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [updatedData,setUpdatedData] = useState('');

  // updatedData: {
  //   title: 'New Title', // Replace with the updated title
  //   content: 'Updated Content', // Replace with the updated content
  // },
  // const state = {
  //   value:0,
  //   arr:[]
  // }

  // 이전 객체(state)를 받은다음 새로운 값을 더해서 생성한다음 nextstate라는 변수에 반환해줌
  // 값이 변해도 바뀐것을 감지를 못하기때문에
  // 불변성을 지킨다.
  // 기존값을 지정 수정하지않고 새로운 값을 만들어내는것.
  // const nextState= produce(state, dra =>{
  //   console.log(dra);
  //   dra.value +=1;
  //   dra.arr.push("a");
  // })
  // console.log("state",state);
  // console.log("nextState",nextState);
  //{...state,value=state.value +1} 이거랑 비슷


const boardhandler = (e) => {
  setTitle(e.target.value);
};

const boardhandler2 = (e) => {
  setContent(e.target.value);
};
let deletenum=0;
const boardhandler3=(e)=>{
  dispatch(removecontent(e));
}
const boardhandler4=(index)=>{
  setUpdatedData({
    index:index,
    title:title,
    content:content

  })
}
useEffect(() => {
  // Perform any actions that need to happen when 'data' changes
  console.log('Data has changed:', updatedData);
  if (updatedData.title && updatedData.content) {

  dispatch(editcontent(updatedData));
  }

}, [updatedData]); //

const loginhandler=()=>{
  dispatch(login());
}
  // 카운트 기능 하나만들기
  return (
    <div className="App">
      <div>
        로그인상태:{loginstate} 
        <button onClick={loginhandler}>로그인</button>
        <button onClick={()=>dispatch(logout())}>로그아웃</button>
      </div>
      <div>
        숫자:{num}
        <button onClick={()=>dispatch(add())}>더하기</button>
        <button onClick={()=>dispatch(remove())}>빼기</button>
      </div>
      <div>
        로딩 여부 : {value} <br/>
        숫자:{num2}
        <button onClick={()=>dispatch(temp(""))}></button>
        <button onClick={()=>dispatch(add2())}>더하기2</button>
        <button onClick={()=>dispatch(remove2())}>빼기2</button>
      </div>
      <div>
        <label>제목</label>
        <input onChange={boardhandler} value={title}></input>
        <label>내용</label>
        <input onChange={boardhandler2} value={content}></input>
        <button onClick={() => {
          const data = {
            title: title,
            content: content,
          };
          dispatch(createcontent(data));
          console.log("boardcontent",boardcontent);
          console.log("작동함");
        }}>
          글 등록
        </button>
        <div>
        {/* Render each item from the boardcontent array as a list */}
        {boardcontent.map((item, index) => (
          <div key={index}>
            <h3>Title: {item.title}</h3>
            <p>Content: {item.content}</p>
            <button onClick={()=>boardhandler3(index)}>지우기</button>
            <button onClick={()=>boardhandler4(index)}>수정하기</button>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
}

export default App;
