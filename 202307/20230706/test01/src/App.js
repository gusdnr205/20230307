import './App.css';
import {Routes,Route,Navigate} from 'react-router-dom';
import { Detail,Login,Main,Mypage,Shop } from './Pages';
import { useState } from 'react';

function App() {
  const [login,setLogin] = useState(false);
  
  const Redirect = ()=>{
    // Navigate : 브라우저의 경로를 바꿔준다.
    // 페이지 리다이렉트 가능
    // 이 과정으로 mypage는 보호받는 페이지가 된다.

    // 로그인이 안 되 있으면 메인 페이지로 이동시킨다.
    return login === true ? <Mypage login={login}/> : <Navigate to={'/login'} login={login}/>
  }

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Main login={login}/>}/>
        <Route path='/login' element={<Login login={login} setLogin={setLogin}/>}/>
        <Route path='/shop' element={<Shop login={login}/>}/>
        {/* 매개변수 데이터베이스의 id는 해당 상품의 id, num은 해당 상품의 번호, name은 해당 삼품의 이름 */}
        <Route path='/detail/:id/:num/:name' element={<Detail login={login}/>}/>
        {/* 로그인 상태일 경우에만 mypage에 접근할 수 있게 */}
        <Route path='/mypage' element={<Redirect/>}/>
      </Routes>
    </div>
  );
}

export default App;
