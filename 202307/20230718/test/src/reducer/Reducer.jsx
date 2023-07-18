import React, { useReducer } from 'react'
const INCREMENT = "INCREMENT"
const DECREMENT = "DECREMENT"

// 더하기 뺄셈만 간단하게 구현

// useState를 사용하것과 크게차이가없음
// react에서 제공해주는 내장 hook 함수 
const Reducer = () => {
    //상태 초기값 

    const init = {
        count: 0,

    }
    //reducer 함수 매개변수로 상태와 액션을 넣어줄예정(콜백함수 왜?)
    const reducer = (state, action) => {
        // type 이라는 키값을 전달받을거임
        // action객체에
        // reducer 함수는 반환값이 있어야하니까 return
        const { tpye,key } = action
        switch (key) {
            case INCREMENT:
                //이전상태를 가지고 기능을 작성한뒤에 반환값으로 상태를 업데이트해주면된다. reducer는 useState의 대체함수이다.?
                return {...state,count:state.count+1};
            case DECREMENT:
                return {...state,count:state.count-1};
            default:
                return state;
        }
    }
    // 배열의 구조분해할당 첫번쨰 두번쨰를 매개변수로 받음
    // useReducer 함수에 첫번쨰는 메뉴판 두번쨰는 초기값을 전달
    const [state, dispatch] = useReducer(reducer, init);
    return (
        <div>지금 count의 상태는 : {state.count}
        <button onClick={()=>{dispatch({type:INCREMENT})}}>더하기</button>
        <button onClick={()=>{dispatch({type:DECREMENT})}}>뺴기</button>
        </div>
    )
}

export default Reducer