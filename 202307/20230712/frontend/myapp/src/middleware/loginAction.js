function login(id,pw){
    // 매개변수로 디스패치를 받고 실행되는 함수를 반환한다.
    return (dispatch) =>{
        // return async(dispatch) =>{
        // 이부분에 데이터베이스 요청 응답 과정이 이곳에 들어가면된다.
        // await
        

        // 비동기 작업을 할때 
        // dispatch를 딜레이시키기위해서 
        console.log("loginaction")
        dispatch({type:"LOGIN",payload:{id,pw}})
    }
}

function logout(){
    return (dispatch)=>{
        dispatch({type:"LOGOUT"})
    }
}

// 새로운 방식으로 내보냄
// login={
//     login:function,
//     logout:function
// }
export const logins={
    login,logout
}

// import 할때는 import {logins} from './'