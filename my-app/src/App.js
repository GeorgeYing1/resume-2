import React, { Component } from 'react';
import Content from './Content/Content.js'
import Header from './Header/Header.js'
import Control from './Control/Control.js'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React and this will be Jingya's homepage</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Header/>
        <Content/>
        <Control/>

      </div>
    );
  }
}

export default App;
