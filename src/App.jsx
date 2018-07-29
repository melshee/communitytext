import React, { Component } from 'react';
import './App.css';
import NavBar from './navbar'
import Carousel from './carousel';
import axios from 'axios';

export default class App extends Component {
  constructor(props){
    super(props);
    this.updateView = this.updateView.bind(this);
    // this.getData = this.getData.bind(this);
    this.state = {
      currView: "home"
    };

    this.linkToImg = { //to map link to image
      "gratitude": "What’s one thing you’re grateful for that happened today?",
      "health": "What’s one healthy choice you made today?",
      "education":  "What’s one thing you learned today?",
      "empowerment": "What’s one thing you’re proud of today?" 
    }

    this.communityToQuestion = {

    }
  }

  updateView(view) {
    this.setState( prevState => {
      prevState.currView = view; 
      return prevState;
    })
  }
  
  // getData(){
  //   try {
  //     return axios.get('https://warm-sands-52730.herokuapp.com/community')
  //   } catch (error) {
  //     console.error(error)
  //   }
  // }

  render() {
    axios.get('https://warm-sands-52730.herokuapp.com/community')
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    

    var body = null; 
    if(this.state.currView === "home"){
      body = 
      <div>
        <h1>Welcome to Community Text!</h1>
      </div>
    } else {
      body = 
      <div>
        <h1>Current community: {this.state.currView}</h1>
        <h3>{this.linkToImg[this.state.currView]}</h3>
        <p>Friends in this community said:</p>
        
        <Carousel/>
      
      </div>
    }
    return (
      
      <div className="App">
        <NavBar updateView={this.updateView}/>
        {body}
      </div>
    );
  }
}
