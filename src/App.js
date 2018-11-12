import React, { Component } from 'react'
import './App.css'

import GameList from './components/GameList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>
            My To Play List
          </h1>
        </header>
        <GameList />
      </div>
    );
  }
}

export default App
