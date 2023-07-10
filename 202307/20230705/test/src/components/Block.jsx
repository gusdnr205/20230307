import React from 'react'


const Block = ({data,name,result}) => {
    let temp = "";
    if(name ==="유저")
    {
        temp=result;
    }else {
        temp = result === "무승부" ? "무승부" :result === "이겼다" ?"졌다." : "이겼다."
    }
    return (
        <div className='block'>
            <div>{name}</div>
            {/* 리액트에서 가장많이 사용하는 조건부 ,렌더링 값이있으면 값을 사용해라 라는 구문 */}
            {/* 값이 없으면 페이지가 터지기때문에 */}
            {/* ? 옵션체이닝도 있다. 값이 있으면 읽어라 라는뜼*/}
            <img src={data && data.img} alt="" />
            <div>{temp}</div>
        </div>
    )
}

// export default Block
export { Block }