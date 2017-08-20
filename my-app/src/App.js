import React, { Component } from 'react';
//import Content from './Content/Content.js'
import Control from './Control/Control.js'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>George (Jingya) learning React</h2>
        </div>
        <Control/>

      </div>
    );
  }
}

export default App;
