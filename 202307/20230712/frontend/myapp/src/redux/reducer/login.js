let init={
    id:"",
    pw:"",
    isLogin: false
}
// 상태저장? jwt 토큰정도? 
function reducer(state = init,action)
{
    // 리듀서 함수는 무조건 반환값이 있어야한다. 
    // 리듀서 함수에서 반환된 값을 store에 업데이트 최신화 시켜준다.
    // 값만 변경되면 몰라요 값이 변경된지 모름 바보임
    // 주소값을 확인한다. 주소가 변하면 업데이를 시켜줌
    // 새로운 주소를 만들어서 반환 해줘야함
    // 우리가 정한규칙 객체의 키값
    // 우리가 보낸 action에서 뽑아서 구조분해할당하는것
    const {type,payload} =action;
    console.log(action);
    // let init={
    //     id:"",
    //     pw:"",
    //     isLogin: false
    // }
    // =>
    // payload={
    //     id:"",
    //     pw:"",
    //     isLogin: false
    // }
    // {...state,id:palyload.id,pw:palyload.pw,isLogin:true};
    // 를 payload로부터 받은뒤 값이 들어가게된다. 


    // payload = [id:"",pw:"",isLogin:"false"]
    switch (type) {
        case "LOGIN":
            return {...state,id:payload.userID,pw:payload.password,isLogin:payload.stat
            };

        case "LOGOUT":
            return {...state,id:"",pw:"",isLogin:payload.stat};

        default:
            return state;
    }
}

export default reducer;