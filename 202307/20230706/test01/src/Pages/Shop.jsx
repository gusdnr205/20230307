import React from 'react'
import { Body, Header } from '../Components'

const Shop = ({login}) => {
  return (
    <div>
        <Header name={'상점'}/>
        <Body path={'/'} name={'메인'} login={login}/>
        <Body path={'/detail'} name={'상세'} login={login}/>
        <Body name={'1번 삼품'} path={'/detail/0/10/셔츠'} item={{id : 0,num : 10, name : '셔츠'}}/>
        <Body name={'2번 삼품'} path={'/detail/1/20/바지'} item={{id : 1,num : 20, name : '바지'}}/>
        <Body name={'3번 삼품'} path={'/detail/2/30/모자'} item={{id : 2,num : 30, name : '모자'}}/>
        <Body name={'4번 삼품'} path={'/detail/3/40/장갑'} item={{id : 3,num : 40, name : '장갑'}}/>
    </div>
  )
}

export default Shop