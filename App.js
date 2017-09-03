import React, { Component } from 'react';
import devmtn from './devmtn.png';
import './App.css';
import Coordinates from './Coordinates'

class App extends Component {

  render() {
    return (
    <div className="background">
      <div className="App">
        <div className="App-header">
          <div><h1>🏠</h1></div>
          <div><h1>></h1></div>
          <div><img src={devmtn} className="App-logo" alt="logo" /></div>
          
      </div>
        <p className="App-intro">
          
        </p>
        <Coordinates/>
      </div>
    </div>
    );
  }
}

export default App;
