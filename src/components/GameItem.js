import React, { Component } from 'react'

class GameItem extends Component {
  itemClicked = e => {
    this.props.onGameCompleted(this.props.game)
  }

  itemDeleted = e => {
    this.props.onGameDeleted(this.props.game)
  }

  render() {
    const { game } = this.props;

    return (
        <div className="GameItem">
          <span className={game.dateCompleted > 0 ? `completed` : ``} onClick={this.itemClicked} >{game.title}</span>
          <span className="deleteIcon" onClick={this.itemDeleted} role="img" aria-label="delete">🗑</span>
        </div>
    );
  }
}

export default GameItem
