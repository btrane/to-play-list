import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'

import GameItem from './GameItem'
@inject('store')
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
    const { completeGames, incompleteGames, totalTimeIncomplete, totalTimeComplete } = this.props.store
    return (
        <div className="GameList">
          <div className="AddGame">
            <input className="GameListInput" type="text" onKeyDown={this.keyPress} placeholder="add new game..." />          
          </div>
          <div className="ListHeader">It will take you {totalTimeIncomplete} hours to complete all of your games.</div>
          {incompleteGames.map(game => <GameItem key={game.id} game={game} completed={game.dateCompleted > 0 ? true : false} />)}
          <hr />
          <div className="ListHeader">You have spent {totalTimeComplete} hours playing these games.</div>
          {completeGames.map(game => <GameItem key={game.id} game={game} completed={game.dateCompleted > 0 ? true : false} />)}
        </div>
    );
  }
}

export default GameList
