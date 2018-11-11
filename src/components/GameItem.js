import React, { Component } from 'react'

class GameItem extends Component {
  componentWillMount() {
    this.setState({ completed: this.props.game.dateCompleted > 0 })
  }

  itemClicked = e => {
    this.setState({ completed: !this.state.completed })
  }

  itemDeleted = e => {
    this.props.onGameDeleted(this.props.game)
  }

  render() {
    const { game } = this.props;
    const { completed } = this.state;

    return (
        <div className="GameItem">
          <span className={completed ? `completed` : ``} onClick={this.itemClicked} >{game.title}</span>
          <span className="deleteIcon" onClick={this.itemDeleted.bind(this)} role="img" aria-label="delete">🗑</span>
        </div>
    );
  }
}

export default GameItem
