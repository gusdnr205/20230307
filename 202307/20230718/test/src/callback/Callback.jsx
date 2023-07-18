import React, { useCallback, useState } from 'react'

// 공식문서에 useCallback은 메모이제이션 콜백을 반환한다는 내용이있음
// 메오이제이션하기위해서 사용하는 리액트 훅함수 
const Callback = () => {
    const [count,setcount]= useState(0);
    const [count2,setcount2]=useState(0);

    const handleCount = useCallback(()=>{
        setcount(count+1);
        // 복잡한 연산을 사용하는경우 근데 그연산이 동일한값으 내보내는 경우
        // 메모이제이션 기법으로 동일한 연산일경에는 메모리에 가지고있다가
        // 사용하는 기법 다른결과가 필요할경우에만 다시 메모이제이션 콜백을
        // 반환해서 사용하는것.
    },[count2]);
    // 첫번쨰 매개변수는 콜백함수를 전달하고 두번쨰 매개변수는 배열을 전달한다. 
    // 이 배열에 들어가는 값이 주시하는 값
    // count2 값이 변하기 전까지는 메모이션 콜백을 반환한다.
    const handlerCount2=useCallback(()=>{
        setcount2(count2 + 1);
    },[count2])
  return (
    <div>
        <div>
            <h1>첫번째:{count}</h1>
            <p>나는 count2가 변하지않으면 안변해 메모이제이션된 콜백이야.</p>
            <button onClick={handleCount}>count</button>
        </div>
        <div>
            <h1>두번째카운트:{count2}</h1>
            <button onClick={handlerCount2}>count2</button>

        </div>
    </div>
  )
}

export default Callback