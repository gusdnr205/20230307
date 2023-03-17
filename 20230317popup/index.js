// 팝업 열어주는함수
function openPopUp(){
    let popup = document.querySelector(".popup-wrap")
    console.log(popup);

    console.log(popup.className);
    console.log(popup.classList);
    // popup.classList
    // popup.className

    // popup.className을 사용하면 문자열을 그대로 대입해주면되고
    // popup.classList를 사용하면 메소드를 사용하면된다.

     // popup.className을 써보자
     // 클래스 구분을 줘야하기때문에 ' is-active' 앞에 한칸띄워줬다.
    // popup.className = popup.className + "is-active" 문자열이 계속붙는다
    // popup.classList.add("is-active");
    
    // 조건처리 클래스가있는지 확인을하고있으면 붙이자말고
    // 없으면 붙히자
    // popup.classList.contains("is-active") is-active 클래스가 있는지 확인
    // 문자열 버전
    // let strArr =  popup.className.split(" ");
    // console.log(strArr);
    // // if(popup.classList.contains("is-active")){
    //     //class가 있으면
    // //}
    // console.log(strArr.indexOf("is-active"));
    // if(strArr.indexOf("is-active")!=-1){
    //     //문자열 제거해서 클르새를 지울수도있고 
    // }
    // else{
    //     //class가 없으면
    //     popup.className = popup.className + "is-active";
    // }

    // 메소드 사용해서 조건추가
    if(popup.classList.contains("is-active"))
    {
        // is-active 있으면 제거할거임 ㅎㅎ
        popup.classList.remove("is-active");
    }else{
        //is -active 없음녀 추가할거임
        popup.classList.add("is-active");
    }
}