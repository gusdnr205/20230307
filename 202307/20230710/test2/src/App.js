import './App.css';
import {Main,Mypage,Order} from './pages';
import { MenuView, Menu } from './component';
import { Route, Routes } from 'react-router-dom';
{/* <Routes>
<Route path='/' element={<Main/>} />
<Route path='/login'element={<Login/>}/>
<Route path='/shop'element={<Shop/>}/>
</Routes> */}

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/mypage' element={<Mypage/>}/>
        <Route path='/order' element={<Order/>}/>
        {/* <Menu></Menu>
        <MenuView /> */}
      </Routes>
    </div>
  );
}

export default App;
