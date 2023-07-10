import React from 'react';
import { Body, Header } from '../Components';

const Mypage = ({login}) => {
  return (
    <div>
        <Header name={'마이'}/>
        <Body path={'/'} name={'메인'} login={login}/>
    </div>
  )
}

export default Mypage