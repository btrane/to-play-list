import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'

@inject('store')
@observer
class GameItem extends Component {
  getTimeToBeat = e => {
    this.props.game.updateTimeToBeat()
  }

  itemClicked = e => {
    this.props.game.toggleComplete()
  }

  itemDeleted = e => {
    this.props.store.deleteGame(this.props.game)
  }

  render() {
    const { game, completed } = this.props

    return (
        <div className="GameItem">
          <span className="GameTime" onClick={this.getTimeToBeat}>{game.timeToBeat > 0 ? game.timeToBeat : '?'}</span>
          <span className={completed > 0 ? `completed` : ``} onClick={this.itemClicked} >{game.title}</span>
          <span className="deleteIcon" onClick={this.itemDeleted} role="img" aria-label="delete">🗑</span>
        </div>
    );
  }
}

export default GameItem
