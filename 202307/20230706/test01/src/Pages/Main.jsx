import React from 'react'
import { Body, Header } from '../Components'

const Main = ({login}) => {
  return (
    <div>
        <Header name={'메인'}/>
        <Body path={'/shop'} name={'상점'} login={login}/>
        <Body path={'/login'} name={'로그인'} login={login}/>
        <Body path={'/mypage'} name={'마이'} login={login}/>
    </div>
  )
}

export default Main