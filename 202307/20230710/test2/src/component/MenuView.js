import React from 'react'
import Menu from './Menu'
import { useSelector } from 'react-redux'

const MenuView = () => {
  const count = useSelector(state => state);

  return (
    <div>
        김치주문 개수:{count.selectMenu.menu1Count}
    </div>
  )
}

export default MenuView