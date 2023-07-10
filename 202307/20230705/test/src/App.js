import './App.css';
import { Block } from ".//components/Block";
import { img01,img02,img03 } from './img';
import React, { useState,useEffect } from 'react'

// 추억의 자바스크립트
// 가위바위보
// 플레이어 1 컴퓨터 1
// 컴포넌트로 만들고 
// 컴퓨터는 랜덤 가위바위보 중에 하나를 내고 
// 플레이어는 선택할수있게 한다.

// 플레이어 컴퓨터 
// 가위 가위 = 무승부
// 가위 바위 = 패
// 가위 보  =승

// 바위 바위 = 무승부
// 바위 보 = 패배
// 바위 가위 = 승

// 보 보 = 무승부
// 보 가위 = 패
// 보 바위 =승
function App() {
  // 컴퓨터와 유저가 사용할 가위 바위 보의 객체를 하나 만들어주자
  // 선택값을 담아 놓을 객체
  // const scissors = "가위";
  // const rock ="바위";
  // const paper = "보";
  // 선택값을 다루고있어
  // select 객체 안에 데이터가 들어있으면
  // select 동작을 하는 프로그램을 작성할때
  // select 객체안에 있는 값은 전부 select동작을 하기위해 만든것이라고 알수있음
  // select 컴퓨터와 우저가 가위바위보를 냈을때 필요한 데이들을 모아둘 객체
  const select={
    scissors :{
    name: "가위",
    img:img02
  },
  rock :{
    name: "바위",
    img:img03
  },
  paper :{
    name: "보",
    img:img01
  },
  }

  // 유져가 선택한 값은 주시하자. 선택하면 다시 데이터 바뀐상태로 다시 그려줘야하기때문에 
  // 유저의 선택 usestate 
  const [userSelect,setUserSelect] = useState(null);
  // 컴퓨터의 값을 담을 useState
  const [comSelect,setComSelect] = useState(null);
  // 승패를 담을 usestate
  const [result,setResult] = useState(null);

  function userClick(_select){
    // 선택한 객체를 상탭변수에 담아주자
    setUserSelect(select[_select]);

    //컴퓨터는 랜덤으로 선택을 시켜야하는데 
    let arr=Object.keys(select);
    // Object.keys 객체의 카값만 뽑아서 반환해준다.
    console.log(arr);
    // 소수점 제외시키고 랜덤한 정수값 0~2
    let comRand= Math.floor(Math.random()*3);
    // 랜덤한 인덱스값
    // arr[comRand] = 문자열이 나옴
    setComSelect(select[arr[comRand]]);

    let player = select[_select];
    let computer= select[arr[comRand]];
    if(player.name === computer.name){
      // 처음에 무승부 거르고
      setResult("무승부");
    }else if(player.name === "가위"){
        let result = computer.name == "보" ? "이겼다": " 졌다."
        setResult(result);

    }else if(player.name === "바위")
    {
      let result = computer.name == "가위" ? "이겼다": " 졌다."
      setResult(result);
    }else if(player.name === "보")
    {
      let result = computer.name == "바위" ? "이겼다": " 졌다."
      setResult(result);
    }

  }

  return (
    <>
      <div className="App">
        <Block data={userSelect} name={"유저"} result={result} />
        <Block data={comSelect} name={"컴퓨터"} result={result}/>
      </div>
      <div>
        {/* {버튼} */}
        <button onClick={()=>{userClick("scissors")}}>가위</button>
        <button onClick={()=>{userClick("rock")}}>바위</button>
        <button onClick={()=>{userClick("paper")}}>보</button>
      </div>
    </>
  );
}
// useEffect(()=>{
//   console.log(userSelect);
// },[userSelect])

export default App;
