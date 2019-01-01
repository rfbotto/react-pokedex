import React, { Component, lazy } from 'react';
import ErrorBoundary from './components/ErrorBoundary';

const Pokedex = lazy(() => import('./components/Pokedex'));

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
          <React.Suspense fallback={<div>loading pokemon list...</div>}>
            <Pokedex />
          </React.Suspense>
        </ErrorBoundary>
      </>
    );
  }
}

export default App;
