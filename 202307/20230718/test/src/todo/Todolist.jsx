import React, { createContext, useState, useMemo, useEffect } from 'react';
import Popup from './Popup';

export const Global = createContext();

const Todolist = ({ onClose }) => {
  const [name, setname] = useState('정현욱');
  const [task, settask] = useState('');
  const [content, setcontent] = useState([]);
  const obj = {
      name,
      setname,
      task,
      settask,
      onClose,
      content,
      setcontent
    }
  
  // const obj = useMemo(
  //   () => ({
  //     name,
  //     setname,
  //     task,
  //     settask,
  //     onClose,
  //     content,
  //     setcontent
  //   }),
  //   [name, setname, task, settask, onClose, content, setcontent]
  // );

  useEffect(()=>{
    console.log("dfdfddfdfdfdff", content)
  }, [content])


  const mappedContent = useMemo(
    () => 
      content.map((item, index) => (
        <div key={index}>
          {item.name}
          {item.task}
          {console.log("축하드립니다^^")}
        </div>
      ))
    ,
    [content]
  );

  return (
    <div>
      <Global.Provider value={obj}>
        <Popup />
        {mappedContent}
      </Global.Provider>
    </div>
  );
};

export default Todolist;
