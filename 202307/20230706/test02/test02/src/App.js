import './App.css';
// import { Todolist } from './pages';

import React, { useEffect, useState } from 'react';




const TodoItem2 = ({ element,index }) => {
  console.log("TodoItem2", { element,index });
  return (
    <div>
      {element}
      <button onClick={}>삭제</button>
    </div>
  );
};

const UpperComponent = () => {
  const [inputValue, setInputValue] = useState('');
  const [allArr, setToArr] = useState([]);
  const [delindex,setdel] = useState(0);

  const handleInputChange = (value) => {
    const updatedArr = [...allArr, inputValue];
    setInputValue(value);
    setToArr(updatedArr);
    console.log(updatedArr);
  };
  const deletehandler = (index)=>{
    
  }

  return (
    <div>
      <h1>?</h1>
      <LowerComponent onInputChange={handleInputChange} />
      <p>InputValue: {inputValue}</p>
      <div className='ahahh'>
        Configuration:
        {allArr.map((element, index) => {
          return <TodoItem2 index={index} element={element} />;
        })}
      </div>
    </div>
  );
};



// Lower component
const LowerComponent = ({ onInputChange }) => {
  let value = "";
  const handleInput = (event) => {
    value = event.target.value;
  };

  return (
    <div>
      <h2>해야할일 등록</h2>
      <input type="text" onChange={handleInput} />
      <button onClick={() => { onInputChange(value) }}>등록</button>
    </div>
  );
};

// App component
const App = () => {
  return (
    <div>
      <UpperComponent />
    </div>
  );
};

export default App;


