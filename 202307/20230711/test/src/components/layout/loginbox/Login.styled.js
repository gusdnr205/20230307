import styled from 'styled-components';
// 우리가 만들고싶은 태그 div에 스타일을 적용시켜서 내보내주자
// extension vscode styled-components 다운
// & : 스타일이 적용되고있는 대상 그러니까 컴포넌트 안이라고 생각하면된다.
export const LoginBOxInput = styled.button`
    border: 2px solid red;
    width: 200px;
    height: 50px;
`
export const LoginBoxWrap = styled.div`
    border : 3px solid;
    background-color: blue;
    /* width: 500px; */
    // width가 업승면 500 있다면 props로 전달받은값
    width: ${(props)=>props.width || "500px"};
    height: 500px;
    // 현재 스타일을 적용받고있는 대상의 자식으로 
    // 클래스 이름적용할때
    & .login-title{
        color: white;
        font-size: 20px;
        text-align: center;
    }
    // 안에있는데 또다른 컴포넌ㅌ일때
    & ${LoginBOxInput}{
        background-color: red;

    }
`

