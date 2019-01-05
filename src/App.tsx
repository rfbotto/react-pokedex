import React, { Component } from 'react';
import ErrorBoundary from './components/ErrorBoundary';
import Pokedex from './components/Pokedex';

class App extends Component {
  render() {
    return (
      <ErrorBoundary>
        <Pokedex />
      </ErrorBoundary>
    );
  }
}

export default App;
