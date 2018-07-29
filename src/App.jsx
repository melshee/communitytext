import React, { Component } from 'react';
import './App.css';
import NavBar from './navbar'
import Carousel from './carousel';

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
