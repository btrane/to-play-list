import React, { Component } from 'react'
import './App.css'
import initialState from './stores'

import GameList from './components/GameList'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = initialState
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>
            My To Play List
          </h1>
        </header>
        <GameList games={this.state.games} />
      </div>
    );
  }
}

export default App
