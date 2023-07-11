// 리듀서 함수
// 메뉴판

// 상태를 관리할떄 초기값이 필요하다. 그상태는 우리가만든다
// 카운트 값 하나 초기로 설정
// 시작은 카운트 
let init={
    count: 0,
    isLogin:false,
    userState:{
        userName:"",
        userAge: 1,
    }
    ,selectMenu:{
        menu1Count:0,
        menu2Count:0,
        menu3Count:0,
        menu4Count:0,
        menu5Count:0,
        
    }

}

// 리듀서는 함수라했다

// 주문받으면 action 음식이름
// action.payload 이거나 action.payload
function reducer(state=init,action){
    console.log(action);
    // 반환값이 무조건있어야함
    // 함수안의 내용은 init으로 초기화한다?
    console.log(state);
    switch(action.type){
        case "김치":
            // 리듀서 함수의 반환값으로 저장소를 최신화 시켜준다.
            // 저장소는 대기하다가 리듀서가 호출되면 값을 반환받아서 최신화 시켜줌
            // ... 리듀서에서 반환된 값을 비교하는게 아니라 주소를 비교하기떄문에
            // 값이 변해도 모름 주소가 바뀌지않으면 업데이트가 되지않느다.

            return { ...state, selectMenu: { ...state.selectMenu, menu1Count: state.selectMenu.menu1Count + 1 } };
            case "계란":
            return {...state,count:state.count-1};

        case "LOGIN" :
            // ...state 초기 객체의 값을 복사하고 
            // count: 0,
            // isLogin:false,
            // userState:{
            //     userName:"",
            //     userAge: 1,
            // }
            //+ isLogin :ture 근데 이 키값이 이미 있다면 덮어 씌워진다.

            // 전역상태를 개발하면서 브라우저의 개발자 모드로 전역상태로 바뀌는걸 실시간으로 확인하고싶음
            // npm install redux-devtools-extension
            return {...state,isLogin:action.payload};
         case "LOGOUT" :
            return {...state,isLogin:action.payload};
        default:
            return {...state};

    }
}

export default reducer;