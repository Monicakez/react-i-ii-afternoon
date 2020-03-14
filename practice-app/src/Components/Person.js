import React, { Component } from 'react';

const Person = (props) => {
    console.log("Props", props)
    const {person} = props; 
    return (
    <div key ={person.id}>
        <h1>{person.name.first} {person.name.last}</h1>
        <br/>
        <h3 className="from"><b>From:</b> {person.city}, {person.country}</h3>
        <h3 className="title"><b>Job Title:</b> {person.title}</h3>
        <h3 className="employer"><b>Employer:</b> {person.employer}</h3>
        <br/>
        <h3 className="movies">Favorite Movies:</h3>
        <ol>
            {person.favoriteMovies.map(movie => {
                console.log(movie)
                return <li>{movie}</li>
            })}
        </ol>
    </div>
    )
}

export default Person