import React, { Component } from 'react';
import './App.css';
import RouletteGun from './state/state-drills/RouletteGun'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>YOUR APPLICATION NAME!</h1>
        <div>Hello!</div>
        <RouletteGun 
          bulletInChamber={this.props.value}
        />
      </div>
    );
  }
}

export default App;