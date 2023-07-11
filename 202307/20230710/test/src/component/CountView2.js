import React from 'react'
import { useSelector } from 'react-redux' // 저장소값을 가져오거나 변경할떄는 다 여기서 한다 라이브러리를 제공
const CountView2 = () => {
    // 저장소 값을 가져와보자 
    // react hook함수 
    // useSelector 전역 상태값을 조회할때 사용
    // 상태에서 count를 반환 
    // count가 변경되었을때 리랜더링 된다.
    // count값을 상태로 보고있음
    const count = useSelector(state => state.count);
  return (
    <div>
        {count}
    </div>
  )
}

export default CountView2