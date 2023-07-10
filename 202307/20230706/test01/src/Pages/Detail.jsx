import React from 'react'
import { Header } from '../Components'
import { useLocation,useParams,useSearchParams } from 'react-router-dom' 
// useLocation : 현재 브라우저의 url 위치 값을 가져오는 hook 함수.
// useParams : url의 params값을 접근하는데 사용하는 hook 함수.
// useSearchParams : url의 쿼리값을 가져올 때 사용하는 hook 함수. 문자열을 해석해서 쿼리 매개 변수 값을 가져온다.

const Detail = () => {
    let temp = [{num : 10, name : '셔츠'},{num : 20, name : '바지'},{num : 30, name : '모자'},{num : 40, name : '장갑'}];
    const location = useLocation();
    console.log(location);
    const params = useParams();
    console.log(params);
    const [query,setQuery] = useSearchParams();
    // query.get() : 쿼리문의 키로 값을 가져오는 메소드
    console.log(query.get('id'));

    return (
        <div>
            <Header name={'상세'}/>
            <div>{temp && temp[params.id].num } 번</div>
            <div>이름 {temp && temp[params.id].name }</div>
        </div>
    )
}

export default Detail