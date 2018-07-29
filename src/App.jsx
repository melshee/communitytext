import React, { Component } from 'react';
import './App.css';
import NavBar from './navbar'
import Carousel from './carousel';
import axios from 'axios';

export default class App extends Component {
  constructor(props){
    super(props);
    this.updateView = this.updateView.bind(this);
    this.state = {
      currView: "home",
      responses: []
    };

    this.communityToQuestion = { //to map link to image
      "gratitude": "What’s one thing you’re grateful for that happened today?",
      "health": "What’s one healthy choice you made today?",
      "education":  "What’s one thing you learned today?",
      "empowerment": "What’s one thing you’re proud of today?" 
    }

    // this.education.
  }

  updateView(view) {
    this.setState( prevState => {
      prevState.currView = view; 
      return prevState;
    })
  }

  componentDidMount() {
    var responses = [];
    let data = axios.get('https://warm-sands-52730.herokuapp.com/community')
      .then(function (response) {
        let communities = response.data;
        console.log(communities);
        var self = this;
        communities.map((item)=> {
          if(item["name"] == "Education") {
            responses = item.responses;
            console.log(responses);
          } else if(item["name"] == "Health/Fitness") { 
            responses = item.responses;
            // console.log(health);
          } else if(item["name"] == "Empowerment") {
            responses = item.responses;
          } else if(item["name"] == "Gratitude") {
            responses = item.responses;
          }
          
        })

       // this.setState({responses: responses})
      })
      .catch(function (error) {
        console.log(error);
      });
      // console.log("RES: ", responses);
      this.setState({responses: responses});

  }

  render() {

    var body = null; 
    if(this.state.currView === "home"){
      body = 
      <div>
        <h1>Welcome to Community Text!</h1>
        <p>Self reflection and the sharing of messages is the reality check we all need, and Community Text is the 
        perfect way to do it. The revolutionized social media using text message to find communities based on your 
        interests. Find other messages that you can relate to and share advice and revelations about yourself that 
        can inspire others.</p>
        {/*</br> */}
        <p>Users will answer questions from their joined communities texted to them daily, and anonymous responses will be stored in databases         and broadcasted to the CommunityText website depending on the community they were submitted to. 
        </p>

      </div>
    } else {
      body = 
      <div>
        <h1>Current community: {this.state.currView}</h1>
        <h3>{this.communityToQuestion[this.state.currView]}</h3>
        <p>Friends in this community said:</p>
        {console.log("responses: ", this.state.responses)}
        <div className="carousel">
          <Carousel community={this.state.currView} responses={this.state.responses}/>
        </div>
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
