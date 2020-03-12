import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from "./Components/Header"; 
import Card from "./Components/Card"; 
import data from "./Components/data"; 

class App extends Component {


  render(){
    const mappedUsers = this.props.data.map(element => {
      return <div key={element.id}></div>

    }
    return (
      <div className="App">
        <Header/>
        <Card data={data}/>
      </div>
    );
  }
}

export default App;
