import React from 'react'
import { useSelector } from 'react-redux' // 저장소값을 가져오거나 변경할떄는 다 여기서 한다 라이브러리를 제공
import CountView2 from './CountView2';
const CountView = () => {
    // 저장소 값을 가져와보자 
    // react hook함수 
    // useSelector 전역 상태값을 조회할때 사용
    // 상태에서 count를 반환 
    // count가 변경되었을때 리랜더링 된다.
    // count값을 상태로 보고있음
    // 부모의 props값을 받지않고 
    // 전역으로 관리되고있는 상태의 값을 컴포넌트가 직접 접근해서 가져온다.
    const count = useSelector(state => state.count);
  return (
    <div>
        {count}
        <CountView2></CountView2>
    </div>
  )
}

export default CountView