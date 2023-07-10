import React from 'react'
import {Link} from 'react-router-dom';
import {Minecraft} from '../Component/Minecraft';
const Main = () => {
  let arr=[]
      for (let i = 0; i < 3; i++) {
        arr[i] = [];
        for (let j = 0; j < 3; j++) {
            arr[i][j] = Math.round(Math.random());
            if(arr[i][j]==1)
            {
            }
        }
    }
    console.log(arr);
  return (
    <div>main
        <Minecraft arr={arr}/>
       <Link to = {"/shop"}> 점으로 이동</Link>
    </div>
  )
}

export default Main