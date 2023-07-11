import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // Provider 컴포넌트는 자식컴포넌트에 store를 주입해준다.
  <Provider store={store}>
    <App />  
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


// 리덕스 
// 스토어, 액션 ,리듀서

// 스토어는 상태가 관리되는 오직 하나의 공간 컴포넌트와 별개로 store라는 공간이있어서
// 펼요한 상태값을 담아둔다.
// 컴포넌트에서 전역상태값이 필요할때 store에 접근해서 데이터를 가져온다.

// 액션은 스토어에 전달할 데이터를 자칭 액션을 사용해서 스토어에 데이터를 보내게된다.
// 액션은 자바 스크립트 객체 형식으로 만들어져 있으 dispatch 함수라는것을 사용해서 인자로 매개변수로 
// 액션을 전달하면 리듀서가 호출되면서 매개변수로 액션을 받게되고 
// dispatch(액션) => 리듀서가 호출되면서 리듀서에 액션을 전달하게된다. 

// 리듀서 dispatch 함수를 통해 액션을 리듀서 함수에 전달한다.
// 리듀서 함수는 매개변수로 전달받은 액션이 뭔지보고 스토어에 상태를 업데이트 할지 여부를 결정


// 리덕스란 

// 리액트에서 사용할수있는 하나의 라이브러리 
// 리액트는 자식 컴포넌트에 props로 전달받은 값을 사용하는데 
// 다른 컴포넌트와 데이터 공유를 직접하기힘듬 불가능하다.

// 그래서 공유해야할 데이터를 공유받는 자식컴포넌트들이 사용할때 공통적 부모 개념? 전역상태의 저장소 store 
// 데이터를 공유할수이도록 만들어준것. 리액트의 데이터흐름은 단방향이라 이런단점을 보완하기 위해 만들었다.

// 리덕스는 사용하면 좋은데 사람들이 제일많이 어려워한다. 


// 쉽게 말해 컴포넌트의 값을 요청하고 전달받는걸 직접 부모한테 전달받는게 아니라 컴포넌트의 값을 요청하고 전달하는것을 직접할수있다.
// 직접 전역 상태를 담고있는 store에 요청 전달한다. 
// 스토어에 있는 데이터를 변수에 값을 넣는것처럼 바로 바꿀순없고 dispatch라는 함수를 사용해서 값을 전달할수있다. 

// 리덕스의 동작 구조 
// 컴포넌트 -> useDispatch -> Action -> Reducer -> store 
// 컴포넌트가 Action을 보내고 Reducer 가 전달을 받고 값을 업데이트 할지 여부를 체크한다음 store의 값을 최신화 시켜준다. 
// 액션을 리듀서가 캐치 리듀서가 판단한다음 저장.

// 액션은 동작할 기능 이름 (메뉴 이름)
// reducer 함수를 실행해서 내가 동작할 기능을 조건문으로 작성해둔 파일 (메뉴판)
// 컴포넌트가 어떤 Action을 실행시킬지 Reducer 함수로 받고 store의 값을 최신화 시켜준다.
// store의 값이 바뀌면 전역상태를 가져오고있는 컴포넌트들을 리랜더링된다.

// 설치 명령어 
// npm i redux
// -------------------------------
// npm i react-redux


// 메인페이지 -> 로그인페이지 -> 음식주문 페이지 -> 마이페이지
// 주문한 음식들은 마이페이지에 보이고
// 로그인을 해야지 음식주문 페이지로 갈수있음. 마이페이지 도 물론 그렇다.

// react-router, react-redux

// props 값 전달 x 