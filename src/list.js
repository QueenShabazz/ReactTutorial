import React from 'react';

export default function List(props){

    console.log(props.cards);
    
    return (
        <section className="List">
            <header className="List-header">
              <h4>{props.header}</h4>
            </header>
            <div className="List-cards">

            </div>
        </section>
    )
}