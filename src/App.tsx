import React, { Component } from 'react';
import ErrorBoundary from './components/ErrorBoundary';
import Pokedex from './components/Pokedex';

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
        <ErrorBoundary>
          <Pokedex />
        </ErrorBoundary>
      </>
    );
  }
}

export default App;
