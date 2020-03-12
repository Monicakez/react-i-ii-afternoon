import React, { Component } from 'react';

export default function Card(props) {

     return (
        <div className="card">
            <section className="userInfo">
                <h1 className="number">{props.data[0].id}/25</h1>
                <h1 className="user">{props.data[0].name.first} {props.data[0].name.last}</h1>
                <h2 className="from">{}</h2>
                <h2 className="title">{}</h2>
                <h2 className="employer">{}</h2>
            </section>

            <section className="favs">
                <h2 className="movies">Favorite Movies:</h2>
            </section>
        </div>
        )
}