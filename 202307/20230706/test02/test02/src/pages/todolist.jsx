import React, { useState } from 'react'
import { Todoinput, Todolistbox } from '../component'
import Todothing from '../component/Todothing';

const Todolist = () => {
  const [todo,settodo] = useState([]);
  return (
    <div className='borderline'>
        <div className='box'>
            <Todoinput/>
            <Todothing/>
        </div>
    </div>
  )
}

export default Todolist