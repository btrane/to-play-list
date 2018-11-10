import React, { Component } from 'react'

class GameItem extends Component {
  render() {
    const { game } = this.props;
    return (
        <div className={`GameItem ${game.dateCompleted > 0 ? `completed` : ``}`}>
          {game.title}
        </div>
    );
  }
}

export default GameItem
