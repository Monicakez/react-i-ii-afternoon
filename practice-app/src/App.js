import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from "./Components/Header"; 
import Card from "./Components/Card"; 
// import data from "./Components/data"; 

class App extends Component {
  constructor(){
    super(); 

    this.state = {
      user: []
    }
  }


  render(){
    return (
      <div className="App">
        <Header/>
        <Card/>
      </div>
    );
  }
}

export default App;
