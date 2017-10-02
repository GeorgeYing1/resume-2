import React, { Component } from 'react';
//import Content from './Content/Content.js'
import Control from './Control/Control.js'
import { Image } from 'semantic-ui-react'
import logo from './logo.svg';
import './App.css';
import UnderConstruction from './assets/images/under-construction.jpg';

class App extends Component {
  state = { 'showContruction': true }
  constructionClick= () => {this.setState({'showContruction': false})}

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>George (Jingya) learning React</h2>
        </div>
        { this.state.showContruction ? <Image label='My website is still under construction but welcome still! Click to Continue' src={UnderConstruction} onClick={this.constructionClick}/> : <Control/> }

      </div>
    );
  }
}

export default App;
