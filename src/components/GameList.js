import React, { Component } from 'react'

import GameItem from './GameItem'

class GameList extends Component {
  keyPress = e => {
    // if pressing enter, add a new game with the title
    if (e.keyCode === 13) {
      let gameToAdd = {
        id: Date.now(),
        title: e.target.value,
        dateAdded: Date.now()
      }
      this.props.onGameAdded(gameToAdd)

      // clear the input
      e.target.value = ''
    }
  }

  render() {
    const { games, onGameCompleted, onGameDeleted } = this.props
    return (
        <div className="GameList">
          <div className="AddGame">
            <input className="GameListInput" type="text" onKeyDown={this.keyPress} placeholder="new game" />          
          </div>
          {games.map(game => <GameItem key={game.id} game={game} onGameCompleted={onGameCompleted} onGameDeleted={onGameDeleted} />)}
        </div>
    );
  }
}

export default GameList
