import React from 'react'
import { Link,useNavigate } from 'react-router-dom';
// Link : 리액트에서 a태그와 같은 역할을 해준다.
// 페이지가 새로 고침이 되지 않고 url만 변경된다.

// react hook 함수 useNavigate : 페이지 전환을 위해 사용.

const Body = ({path,name,login, item}) => {
    const nav = useNavigate();

    return (
        <div className='body'>
            <Link to={path}>{name} 페이지 이동</Link>
            <button onClick={()=>{
                nav(path);
            }}>{name} 페이지 이동</button>
            {login ? <div>로그인 됨</div> : <div>로그인 안됨</div>}

            {item && item.id ? <div>{item.id}</div> : null}
            {item && item.num ? <div>{item.num}</div> : null}
            {item && item.name ? <div>{item.name}</div> : null}
        </div>
    )
}

export default Body