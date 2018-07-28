import React, { Component } from 'react';
import './App.css';

export default class App extends Component {
  constructor(props){
    super(props);
  }

  render() {

    return (
      <div className="App">
        <h1>Welcome to Community Text!</h1>
        <h3>What's one thing you're greatful for today?</h3>
        <p>Some responses from others in your community:</p>
        <p>"Attending Spectra!"</p>

      </div>
    );
  }
}
