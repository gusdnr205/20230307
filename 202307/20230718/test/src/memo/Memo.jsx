import React, { useMemo, useState } from 'react'

const Memo = () => {
    const [count,setCount] = useState(0);
    const [count2,setCount2]=useState(0);

    const handleCount = ()=>{
        console.log("나 count");
        setCount2(count+1);
    }
    // 컴포넌트의 리렌더링을 관리하고싶음
    // 부모컴포넌트가 리렌더링 되면 자식 컴포넌트가 리렌더링 되는데
    // 부모컴포넌트 안에 자식 컴포넌트가 무척많으면 전부 리렌더링 되는데 그럼 페이지가 
    // 최적화지않는다.

    // 그떄 사용하는게 useMomo
     
   
    const handlerCount2=useMemo(()=>{
        console.log("나 count2");
        
        return (count+1)
    },[count2])
    // count2 를주시하고있다가 값이 변하면 새로운 값으로 업데이트 
  return (
    <div>
        <p>memo</p>
        <button onClick={handleCount}>더하기</button>
        {/* 화면을 다시그려주면서 함수 실행식이 계속실행되는데 그 반복을 막을수없을까해서 하는게 메오이제이션이고 usememo이다. */}
        <p>handlecount2:{handlerCount2}</p>
    </div>
  )
}

export default Memo