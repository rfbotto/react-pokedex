import React, { Component } from 'react';
import PokemonList from './components/PokemonList';

class App extends Component {
  render() {
    return (
      <>
        <div>
          <h1>
            <span role="img" aria-label="React Christmas Advent">
              ✡️🎄✌
          </span>
            React Christmas Advent
        </h1>
        </div>
        <React.Suspense fallback={<div>loading pokemon collection...</div>}>
          <PokemonList />
        </React.Suspense>
      </>
    );
  }
}

export default App;
