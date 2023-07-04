import './App.css';
import React, { Component } from 'react';
import Main from './pages/Main';

// class App extends Component
// {
//   render(){
//     return(
//       <div className="App">
//         <button></button>
//         <Main />
//       </div>
//     )
//   }
// }

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAppVisible: true
    };
  }

  handleButtonClick = () => {
    this.setState({ isAppVisible: false });
  };

  render() {
    const { isAppVisible } = this.state;

    return (
      <div className={isAppVisible ? "App" : "App hidden"}>
        <button onClick={this.handleButtonClick}>보이기 안보이기</button>
        <Main />
      </div>
    );
  }
}

export default App;
