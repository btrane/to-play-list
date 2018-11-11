import React, { Component } from 'react'
import { connect } from 'react-redux'

import { deleteGame, toggleComplete } from '../actions'

class GameItem extends Component {
  itemClicked = e => {
    this.props.toggleComplete(this.props.game)
  }

  itemDeleted = e => {
    this.props.deleteGame(this.props.game)
  }

  render() {
    const { game, completed } = this.props;
    return (
        <div className="GameItem">
          <span className={completed ? `completed` : ``} onClick={this.itemClicked} >{game.title}</span>
          <span className="deleteIcon" onClick={this.itemDeleted} role="img" aria-label="delete">🗑</span>
        </div>
    );
  }
}

// store actions
const mapDispatchToProps = {
  deleteGame,
  toggleComplete,
}

const MyGameItem = connect(null, mapDispatchToProps)(GameItem)

export default MyGameItem
