import React, { Component } from 'react';
import './App.css';
import NavBar from './navbar'
import Carousel from './carousel'


export default class App extends Component {
  constructor(props){
    super(props);
  }

  render() {

    var user = "Melissa";
    return (
      <div className="App">
        <NavBar/>
        <h1>Welcome to Community Text!</h1>
        <h3>What is one thing you are greatful for today?</h3>
        <p>Some responses from others in your community:</p>
        <p>"Attending Spectra!"</p>
        <Carousel/>
      </div>
    );
  }
}
