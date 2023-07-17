import React from 'react'
import {Link} from 'react-router-dom';
import Boardd from '../component/layout/Boardbox';
const Board = () => {
  return (
    <div>Board
        <Boardd></Boardd>
        <Link to = {"/write"}>글쓰기</Link>
    </div>
    
  )
}

export default Board