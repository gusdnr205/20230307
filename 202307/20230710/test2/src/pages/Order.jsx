import React from 'react'
import {Link} from 'react-router-dom';

import { MenuView, Menu } from '../component';

const Order = () => {
  return (
    <div>
        <Menu/>
        <Link to = {"/mypage"}> 주문확인페이지로 이동</Link>
    </div>
  )
}

export default Order