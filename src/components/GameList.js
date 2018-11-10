import React, { Component } from 'react'

import GameItem from './GameItem'

class GameList extends Component {
  render() {
    const { games } = this.props;
    return (
        <div className="GameList">
          {games.map(game => <GameItem key={game.id} game={game} />)}
        </div>
    );
  }
}

export default GameList
