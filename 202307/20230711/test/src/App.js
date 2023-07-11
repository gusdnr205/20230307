import './App.css';
import LoginBox from './components/layout/loginbox';
import { weather, logins } from './middleware';
import { useDispatch, useSelector } from 'react-redux';
import React, { useState, useEffect } from 'react'
function App() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [pw, setPw] = useState('');
  // 전역상태 접근할때 리듀서를 여러개 사용한경우
  // 객체의 키값에 해당하는 리듀서 키값을 사용해주자.
  const isLogin = useSelector(state => state.login.isLogin);
  const userName = useSelector(state => state.login.id);
  const weatehrData = useSelector(state => state.weatehr.weatehrData)

  const login = () => {
    dispatch(logins.login(id, pw));
  }

  const logout = () => {
    dispatch(logins.logout(id, pw));
  }

  const getWeather = () => {
    dispatch(weather.getWeather(name));
  }

  useEffect(() => {
    console.log(isLogin);
    console.log(userName);
  })
  useEffect(() => {
    console.log(id);
    console.log(pw);
  }, [id, pw]);

    useEffect(() => {
      console.log(weatehrData)
    }, [weatehrData]);


  return (
    <div className="App">
      {/* <LoginBox></LoginBox> */}
      <label>도시이름</label> <br />
      <input onChange={(e) => { setName(e.target.value) }} ></input> <br />
      <button onClick={getWeather}>날씨 검색</button>

      <div>지금 여기는 {weatehrData && weatehrData.data?.name} 날씨는 :{weatehrData && weatehrData.data?.weatehr[0]?.main}</div> <br />

      <label>아이디</label> <br />
      <input onChange={(e) => { setId(e.target.value) }}></input> <br />
      <label>비밀번호</label> <br />
      <input onChange={(e) => { setPw(e.target.value) }}></input> <br />
      <button onClick={login}>로그인</button>

      <div>로그인 되었는가?</div> {isLogin ? <>{userName}유저 로그인<button onClick={logout}>로그아웃</button></> : <>로그안 상태: 로그아웃</>}
    </div>
  );
}

export default App;


//api를 가져와서 스토어의 상태값을 바꿀때 비동기 처리를하기위해서 미들웨어를 추가해야한다.

//클래스명이 겹치지않는다
//스타일에 관련되어서 props로 값을 전달해서 스타일 값을 적용시킬수있다.
// SCSS
// styled-components
// npm i styled-components

// 리덕스 설치

// npm i redux
// npm i react-redux

// 저장소 구성하자 스토어 

// redux-thunk 
// api 를 요청하고 처리가 된뒤에 상태를 업데이트 하기위해서
// dispatch를 지연시킨다. actions 라는 함수를 만들거임 ?api 처리가 끝나면 상태를날리는거?
// redux-thunk 미들웨아러 추가하는방법 
// dispatch 함수를 실행할때 매개변수로 객체를 넘기느냐 함수를 넘기느냐의 차이 
//  actions는 결국함수이고 dispatch를 지연시키는데 사용 Api요청이 다끝난뒤 실행되도록

// 날씨 api를 가지고와서 사용해보자.

// openweathermap.org/current 가입하고사용한다.

// 내api key c24dc83a26f02005fbaeaeeff24905e4

// thunk가 해주는 역할은 Action creatros라는 함수를 만들어주는것
// Action creatros 함수는 함수를 반환한다.
// thunk는 dispatch를 딜레이 시켜주는역할 이게 핵심임 ㅇㅇ
// npm i redux-thunk

// npm start 우리가 개발할때 사용하는 개발환경
// npm run build
// 빌드된 파일을 배포하는것

// src="/static/js/main.71398872.js"></script><link href="/static/css/main.073c9b0a.css"  static 앞에 ./ 이런식으로 붙이고 배포하는것

// 게시판 구현
// 글 추가, 삭제 ,수정 ,디자인은 styled component 
// express 사용해서 서버구축 게시판 CRUD 
// 로그인 jwttoken 사용해서 로그인 인증까지 ㅎ...

// 내가 어디까지 할수있는가 테스트