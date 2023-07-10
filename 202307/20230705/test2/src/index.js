import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
// 리액트는 페이지가 한개인데 어떻게 여러개의 페이지를 보여줄까?
// index.html 한개로 페이지를 보여주는데
// 페이지를 컴포넌트로 구성하고 하위컴포넌트들을 모아서 페이지의 형태로 구색을 맞춰서 브라우저에 보여준다.
// 페이지가 전환된다는것은 페이지 컴포넌트를 조건마다 바꿔서 보여주면된다.
// 브라우저가 새로고침되지않고 내용만 교체되는 구조 
// 조건은 브라우저으 url에따라 페이지 컴포넌트를 맞춰서 보여주면된다.
// 결국 페이지 이동은 눈속임

// 리액트 라우터라는 라이브러리를 사용할것
// https://reactrouter.com/en/v6.3.0/getting-started/tutorial

// 설치명령어
// react 설치한 경로에다가 설치해야함
// npm install react-router-dom@6
// ------------------------------------
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //BrowserRouter 컴포넌트로 app 컴포넌트를 자식으로 감싸서 app컴포넌트가 라우팅 기능을 사용할수있다.
   <BrowserRouter>
    <App />
  </BrowserRouter>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
