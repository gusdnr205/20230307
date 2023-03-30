// 예외처리문 
// try -catch문 코드실행중 예외상황이 발생해도 프로그램이 종료가 되지않고
// 프로그램을 유지할수있다.
// 체인옵셔널? 

// try-catch 
// 프로그램의 안정성을 높힐수있다.


try {
    // 오류가 발생할거같은 코드
} catch (err) {
    // 오류가 발생했을때
    // 오류의 메세지 error
}

try {
    if(5==5) throw "Erradfhakjdf"
    // throw 에러 메시지를 던질수있다.
} catch (error) {
    console.log(error);
}

function myStr(){
    let devValue = document.querySelector('.dev').value;
    try {
        if(devValue=="") throw"비었음dd!";
        devValue=Number(devValue);
        console.log(isNaN(devValue));
        // number 숫자로 타입을 변경해주는 새성자 함수.
        if(isNaN(devValue))throw "number가 아님"
        //문자열이 들어가면 문자가 숫자로 변화될수있어서
        // num가 아니다.
        
        //오류가 발생해도 프로그램이 종료가안된다.
    } catch (error) {
        //코드를 실행하다가 err가 발생하면 
        // catch 문을 실행하고 오류의내용은 
        //error 매개변수에 들어온다.

        console.log(typeof devValue);
        console.log(devValue);
        document.querySelector(".message").innerHTML=error;
        
    }
}