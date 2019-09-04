import React from 'react';
<<<<<<< HEAD
import  './card.css';
export default 

function Card (props){
 
    return (
        <div className="Card">
            <button onClick={() => props.onDelete(props.id)} type="button">delete</button>
            <h3>{props.title}</h3>
            <p>{props.content}</p>
=======

export default function Card(props){
    const title = "This is a test" ;
    const content = "jello";
    return (
        <div className="Card">
            <button type="button">delete</button>
            <h3>{title}</h3>
            <p>{content}</p>
>>>>>>> e86c17e7e4c7b665129dd8d619ce6479f54b1d97
        </div>
    )
}

Card.propTypes = {
    onDelete: () => {}
  }