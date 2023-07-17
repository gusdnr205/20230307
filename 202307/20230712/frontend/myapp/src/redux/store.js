import {createStore,applyMiddleware} from "redux";
import reducer from "./reducer";
// 사용할 미들웨어는 thunk
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";

// 설치는 npm i redux-thunk
// 미들웨어 추가 해야함 
// applyMiddleware 함수로 미들웨어 추가 반환되는 객체로 추가 

// 미들웨어로 thunk를 추가하는 방법은
// applyMiddleware함수의 매개변수로 사용할 미들웨어 전달
// applyMiddleware(thunk)ß

//음식점 차렸음 어떤 음식점이지? 메뉴판받아서 만들기
export const store = createStore(reducer,composeWithDevTools(applyMiddleware(thunk)));