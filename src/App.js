import React, { Component } from 'react'
import './App.css'
import initialState from './stores'

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
        <div className="GameList">
          {this.state.games.map(game => <div key={game.id} className={`GameItem ${game.dateCompleted > 0 ? `completed` : ``}`}>{game.title}</div>)}
        </div>
      </div>
    );
  }
}

export default App
