import React, { Component } from 'react';
import people from "./data"
import Person from "./Person"

export default class Card extends Component {
    constructor(props) {
        super(props); 
        this.state = {
            personIndex: 0
        }
    }

    

    previousIndex = () => {
        if(this.state.personIndex === 0) {
            let newIndex = people.length - 1
            this.setState({
                personIndex: newIndex
            })
        } else {
            this.setState({
                personIndex: this.state.personIndex - 1
            })
        }
        
    }

    nextIndex = () => {
        if (this.state.personIndex === people.length -1) {
            this.setState({
                personIndex: 0
            })
        } else {
            this.setState({ 
                personIndex: this.state.personIndex + 1
            })
        }
        
    }

    render (){
        const {personIndex} = this.state
        console.log("personIndex", personIndex)
        const mappedData = people.map(person => {
            return <Person person={person}/>
         
        })
        console.log(mappedData)
        return (
            <div className="card">
                {mappedData[personIndex]}
                <button onClick={this.previousIndex}>Previous</button>
                <button onClick={this.nextIndex}>Next</button>
                {/* <section className="userInfo">
                    <h1 className="number">{}/25</h1>
                    <h1 className="user">{} {}</h1>
                </section>
    
                <section className="favs">
                </section> */}
            </div>
            )
    }

    
}