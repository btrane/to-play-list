import React, { Component } from 'react'

class GameItem extends Component {
  itemClicked = e => {
    this.props.store.toggleComplete(this.props.game)
  }

  itemDeleted = e => {
    this.props.store.deleteGame(this.props.game)
  }

  render() {
    const { game, completed } = this.props;

    return (
        <div className="GameItem">
          <span className={completed > 0 ? `completed` : ``} onClick={this.itemClicked} >{game.title}</span>
          <span className="deleteIcon" onClick={this.itemDeleted} role="img" aria-label="delete">🗑</span>
        </div>
    );
  }
}

export default GameItem
