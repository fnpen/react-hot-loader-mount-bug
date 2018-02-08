import React, { Component } from 'react';
import { hot } from 'react-hot-loader';

import asyncLoader from './asyncLoader';
import './App.css';

class App extends Component {
  state = { hidden: false };

  onClick = () => {
    this.setState({ hidden: !this.state.hidden });
  }

  render() {
    const { hidden } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-intro">
          <button onClick={this.onClick}>Toggle visibility</button>
          { !hidden ? React.createElement(asyncLoader(() => import('./AsyncText'))) : null }
        </div>
      </div>
    );
  }
}

export default hot(module)(App);
