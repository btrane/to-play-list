import React, { Component } from 'react'
import { observer } from 'mobx-react'

import GameItem from './GameItem'
@observer 
class GameList extends Component {
  keyPress = e => {
    // if pressing enter, add a new game with the title
    if (e.keyCode === 13) {
      let gameToAdd = {
        id: Date.now(),
        title: e.target.value,
        dateAdded: Date.now()
      }
      this.props.store.addGame(gameToAdd)

      // clear the input
      e.target.value = ''
    }
  }

  render() {
    const { games } = this.props.store
    return (
        <div className="GameList">
          <div className="AddGame">
            <input className="GameListInput" type="text" onKeyDown={this.keyPress} placeholder="new game" />          
          </div>
          {games.map(game => <GameItem key={game.id} game={game} store={this.props.store} completed={game.dateCompleted > 0 ? true : false} />)}
        </div>
    );
  }
}

export default GameList
