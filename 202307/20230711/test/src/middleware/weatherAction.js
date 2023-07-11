import axios from 'axios'
// 요청 응답을 처리할때 
// axios 
// 요청 응답 처리를 해줄겁니당.

// axios 설치 npm i axios

function getWeather(name){
    return async(dispatch)=>{
        // api 작업 데이터 요청
        const data = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=ebac80908ace01c984f9989655759128`)
        // 요청의 처리가 끝나면 q= 하고나온거 서치 파람스 query문
        dispatch({type:"GET_WHEATER",payload:data});
    }
}

export const weather={ getWeather}