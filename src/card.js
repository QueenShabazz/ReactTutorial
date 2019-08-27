import React from 'react';

export default function Card(props){
    const title = "This is a test" ;
    const content = "jello";
    return (
        <div className="Card">
            <button type="button">delete</button>
            <h3>{title}</h3>
            <p>{content}</p>
        </div>
    )
}