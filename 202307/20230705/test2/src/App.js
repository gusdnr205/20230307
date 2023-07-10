import './App.css';
import {Main,Login,Shop} from './pages/index';
import { Route,Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      {/* "Routes <= switch" */}
     {/* 조건부렌더링 routes 가 route들의 부모 컴포넌트 */}
     {/* Route컴포넌트는 속성을 두개 주자 , 페이지를 정의해준다.
        path랑 element
        path : 브라우저의 경로 (컴포넌트 페이지를 바꿔서 보여줄 경로
        element : path 경로에 브라우저 경로가 맞으면 이속성에 넣은 컴포넌트를 보여준다 (보여줄 컴포넌트 )
        )*/}
     <Routes>
        <Route path='/' element={<Main/>} />
        <Route path='/login'element={<Login/>}/>
        <Route path='/shop'element={<Shop/>}/>
     </Routes>
    </div>
  );
}

export default App;
