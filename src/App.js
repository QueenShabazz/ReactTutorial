import React, {Component} from 'react';
import List from './list';
import STORE from './store'

// const store = lists, allCards;
// const store = props.store;
// let lists = [];
// let allCards = {};

function omit(obj, keyToOmit) {
  return Object.entries(obj).reduce(
    (newObj, [key, value]) =>
        key === keyToOmit ? newObj : {...newObj, [key]: value},
    {}
  );
}

class App extends Component {
  state = {
    store: STORE,
  
  };

onDelete = (cardId) => {
    const {lists, allCards} = this.state.store;
    const newList = lists.map(list => ({
      ...list,
      cardIds: list.cardIds.filter(id => id !== cardId)
    }));
  const newCards = omit(allCards, cardId)
  this.setState({
     store:{
        lists : newList,
        allCards: newCards
     }
   })
  };


render () {
    const {store} = this.state
    return(
    <div className="App-list">
      <section className="List">
        <header className="List-header">
          <h2>First list</h2>
        </header>
      </section>
      {store.lists.map( list =>
        <List
          key={list.id}
          header={list.id}
          cards={list.cardIds.map(id=> store.allCards[id])}
          onDelete = {this.onDelete}
        />
      )}

    </div>
    )};
}

export default App;