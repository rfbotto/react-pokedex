import React, { Component } from 'react';
import ErrorBoundary from './components/ErrorBoundary';
import Pokedex from './components/Pokedex';
import { Typography } from '@material-ui/core';

class App extends Component {
  render() {
    return (
      <>
        <Typography component="h2" variant="h2" align="center" gutterBottom>
          Pokedex ✨
        </Typography>
        <ErrorBoundary>
          <Pokedex />
        </ErrorBoundary>
      </>
    );
  }
}

export default App;
