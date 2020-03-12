import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from "./Components/Header"; 
import Card from "./Components/Card"; 
import data from "./Components/data"; 

class App extends Component {
  constructor(){
    super(); 

    this.state = {
      user: []
    }
  }

  componentDidMount(){
    this.setState({
      user: data // might need curly brackets on data 
    })
  }

  render(){

    const {user} = this.state 

    const mappedUsers = this.state.user.map(element => {
      return (
          <div>
            key={element.id}
          </div>
      )
    })

    return (
      <div className="App">
        <Header/>
        <Card data={data}/>

        {
        user.map(data => (
          <data key={data.id}/>
        ))
        }

        {mappedUsers}
      </div>
    );
  }
}

export default App;
