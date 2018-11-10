import React, { Component } from 'react'

class GameList extends Component {
  render() {
    const { games } = this.props;
    return (
        <div className="GameList">
          {games.map(game => <div key={game.id} className={`GameItem ${game.dateCompleted > 0 ? `completed` : ``}`}>{game.title}</div>)}
        </div>
    );
  }
}

export default GameList
