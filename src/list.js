import React from 'react';
<<<<<<< HEAD
import Card from './card';
import './list.css';

function List (props){
    return (
        <section className="List">
            <header className="List-header">
             <h2>{props.header}</h2>
            </header>
             <div className="List-cards">
             {props.cards.map((card) =>
                <Card
                    key={card.id}
                    title={card.title}
                    content={card.content} 
                    onDelete={props.onDelete}
                />
             )}
            </div>
            <button
                type='button'
                className='List-add-button'>
                    Add Card
            </button>
=======

export default function List(props){

    console.log(props.cards);
    
    return (
        <section className="List">
            <header className="List-header">
              <h4>{props.header}</h4>
            </header>
            <div className="List-cards">

            </div>
>>>>>>> e86c17e7e4c7b665129dd8d619ce6479f54b1d97
        </section>
    )
}
List.defaultProps = { 
    onClickAdd: () => {},
}
export default List
