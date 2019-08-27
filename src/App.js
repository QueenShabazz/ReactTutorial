import React from 'react';
import List from './list'

function App(props) {

  const myList = props.store.lists.map((list, index) => {
    return <List key={index} header={list.header} allCards={props.store.allCards} cards={list.cardIds.map(id => props.store.allCards[id])}/>
  });

  return (
    <div className="App-list">
      <section className="List">
        <header className="List-header">
          <h2>Trelloyes</h2>
        </header>
      </section>
      {myList}
    </div>
  );
}

export default App;