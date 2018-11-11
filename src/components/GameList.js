import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addGame } from '../actions'

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
      this.props.addGame(gameToAdd)

      // clear the input
      e.target.value = ''
    }
  }

  render() {
    const { games } = this.props
    return (
        <div className="GameList">
          <div className="AddGame">
            <input className="GameListInput" type="text" onKeyDown={this.keyPress} placeholder="new game" />          
          </div>
          {games.map(game => <GameItem key={game.id} game={game} completed={game.dateCompleted > 0 ? true : false} />)}
        </div>
    );
  }
}

// store props
const mapStateToProps = state => ({
  games: state.gamesReducer.games,
})

// store actions
const mapDispatchToProps = {
  addGame,
}

const MyGameList = connect(mapStateToProps, mapDispatchToProps)(GameList)

export default MyGameList
