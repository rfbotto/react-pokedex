import React, { Component } from 'react';
import ErrorBoundary from './components/ErrorBoundary';
import Pokedex from './components/Pokedex';
import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <ErrorBoundary>
        <Header />
        <Pokedex />
      </ErrorBoundary>
    );
  }
}

export default App;
