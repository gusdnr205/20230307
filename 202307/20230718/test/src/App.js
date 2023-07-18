import './App.css';
// import Callback from './callback/Callback';
// import Context from './context/Context';
// import Reducer from './reducer/Reducer';
// import Memo from './memo/Memo';
// function App() {
//   return (
//     <div className="App">
//      {/* <Context></Context> */}
//      {/* <Reducer></Reducer> */}
//      {/* <Callback></Callback> */}
//      <Memo></Memo>
//     </div>
//   );
// }

// export default App;
import React, { useState ,useContext,useMemo} from 'react';
import Popup from './todo/Popup';
import Todolist from './todo/Todolist';
// import { Global } from './context/Context';

const Title = ({ maintitle }) => {
  console.log('Rendering Title');
  return <h1>{maintitle}</h1>;
};

const App = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  // const {name,setname,task,settask,onClose,setcontent}= useContext(Global);
  // const {name} = useContext(Global);
  const [maintitle,setmaintitle] = useState("My App");

  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };
  const handleTitleChange=(e)=>{
    setmaintitle(e.target.value)
  }
  const memoizedTitle = useMemo(() => <Title maintitle={maintitle} />, [maintitle]);

  return (
    <div>
      <h1>{memoizedTitle}</h1>
      <input onChange={handleTitleChange}></input>
      {/* <Todolist> */}
      <button onClick={handleOpenPopup}>Create Task</button>
      {isPopupOpen && <Todolist onClose={handleClosePopup} />}
      {/* </Todolist> */}
    </div>
  );
};

export default App;
