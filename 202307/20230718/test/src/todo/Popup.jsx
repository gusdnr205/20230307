import React, { useState,useContext, useMemo } from 'react';
import { Global } from './Todolist';

const Popup = () => {
//   const [task, setTask] = useState('');
  const {name,setname,task,settask,onClose,setcontent,content}= useContext(Global);
  console.log(setcontent);


  const handleInputChange = (e) => {
    settask(e.target.value);
  };
  const handletitleChange=(e)=>{
    setname(e.target.value);
  }

  const handleSave = () => {
    let newcontent = {
      name: name,
      task: task
    }
    setcontent([...content, newcontent]);
  };   
  const sdf = useMemo(()=>{
    console.log("sd")
  },[content])
  return (
    <div className="popup">
      <div className="popup-content">
        <h2>Create Task</h2>
        <input
          type="text"
          value={name}
          onChange={handletitleChange}
          placeholder="Enter title"
        />
        <input
          type="text"
          value={task}
          onChange={handleInputChange}
          placeholder="Enter task"
        />
        <button onClick={handleSave}>Save</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
};

export default Popup;
