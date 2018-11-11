import React, { Component } from 'react'
import './App.css'
import initialState from './stores'

import GameList from './components/GameList'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = initialState
  }

  // function to add a game to the list
  onGameAdded = gameToAdd => {
    this.setState({ games: [...this.state.games, gameToAdd] })
  }

  // function to delete a game from the list
  onGameDeleted = gameToDelete => {
    let updatedGames = this.state.games.filter(game => game !== gameToDelete)
    this.setState({ games: updatedGames })
  }

  // function to mark a game as completed
  onGameCompleted = gameToComplete => {
    // copy the array
    let updatedGames = this.state.games.slice()
    // find the game
    let theGame = this.state.games.filter(game => game.id === gameToComplete.id)[0]
    // set completed time or clear it
    if (theGame.dateCompleted > 0) {
      theGame.dateCompleted = 0
    } else {
      theGame.dateCompleted = Date.now()
    }
    this.setState({ games: updatedGames })
  }

  render() {
    const { games } = this.state
    return (
      <div className="App">
        <header className="App-header">
          <h1>
            My To Play List
          </h1>
        </header>
        <GameList games={games} onGameAdded={this.onGameAdded} onGameCompleted={this.onGameCompleted} onGameDeleted={this.onGameDeleted} />
      </div>
    );
  }
}

export default App
