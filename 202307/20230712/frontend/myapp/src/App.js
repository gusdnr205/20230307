import './App.css';
// import LoginBox from './components/layout/loginbox';
// import { logins } from './middleware';
// import { useDispatch, useSelector } from 'react-redux';
// import React, { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom';
import { Main ,SignUp,Login,Board,Write} from './page';

function App() {
  return (
    <div className="App">
      {/* <Route path='/' element={<Main/>} />
        <Route path='/login'element={<Login/>}/>
        <Route path='/shop'element={<Shop/>}/> */}
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/SignUp' element={<SignUp/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/Board' element={<Board/>}/>
        <Route path='/write' element={<Write/>}/>

      </Routes>
    </div>
  );
}

export default App;
