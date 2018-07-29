import React, { Component } from 'react';
import './App.css';
import NavBar from './navbar'
import Carousel from './carousel';
import mongoose from 'mongoose';
import models from './model';

export default class App extends Component {
  constructor(props){
    super(props);
    this.updateView = this.updateView.bind(this);
    this.state = {
      currView: "home"
    };
  }

  updateView(view) {
    this.setState( prevState => {
      prevState.currView = view; 
      return prevState;
    })
  }

  render() {
    //setup mongoose connection
    // mongoose.connection.on('error', function() {
    // console.log('error connecting to database')
    // })
    // mongoose.connection.on('connected', function() {
    // console.log('succesfully connected to database')
    // })
    // mongoose.connect(process.env.MONGODB_URI)

    // var User = models.User;
    // var Message = models.Message;
    // var Community = models.Community;
    //models: User, Message, Community
    // var models = './models/model';
    //var User = models.User;
    //User.find(function(err, user) {

      //finds all users

      //User.findOne({key: value}, function(err, user) ) //finds one user by the key

    // })

    var body = null; 
    if(this.state.currView == "home"){
      body = 
      <div>
        <h1>Welcome to Community Text!</h1>
        <p>Self reflection and the sharing of messages  is the reality check we all need, and Community Text is the perfect way to do it.           The revolutionized social media using text message to find communities based on your interests. Find other messages that you               can relate to and share advice and revelations about yourself that can inspire others.
        <br> 
        Users will answer questions from their joined communities texted to them daily, and anonymous responses will be stored in databases         and broadcasted to the CommunityText website depending on the community they were submitted to. 
        </p>

      </div>
    } else {
      body = 
      <div>
        <h1>Current community: {this.state.currView}</h1>
        <h3>What is one thing you are greatful for today?</h3>
        <p>Friends in the community said:</p>
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
