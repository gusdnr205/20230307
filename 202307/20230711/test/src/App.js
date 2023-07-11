import './App.css';
import LoginBox from './components/layout/loginbox';
function App() {
  return (
    <div className="App">
      <LoginBox></LoginBox>
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