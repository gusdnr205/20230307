// 객체분할 할당으로 내보내줄경우에는 이런식으로 받아와야함
// import {LoginBtn,LoginBtn2} from "./components/LoginBtn";
// ES6 문법 단일로 하나만 내보낼경우에는 이름이 무엇이든 상관이없다. 

// 가져와서 Login명으로 사용할거임
// import Login from "./components/LoginBtn";

// // 루트 요소 가상 DOM으로 생성
// // 루트 설정 
// const root = ReactDom.createRoot(document.querySelector("#root"));

// root.render(<Login/>);

// Create root element virtual DOM
const root = document.querySelector('#root');

root.innerHTML="hello";
ReactDOM.render(<LoginBtn/>, root);
