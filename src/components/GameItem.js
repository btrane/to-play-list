import React, { Component } from 'react'

class GameItem extends Component {
  componentWillMount() {
    this.setState({ completed: this.props.game.dateCompleted > 0 })
  }

  itemClicked = e => {
    this.setState({ completed: !this.state.completed })
  }

  render() {
    const { game } = this.props;
    const { completed } = this.state;

    return (
        <div className={`GameItem ${completed ? `completed` : ``}`} onClick={this.itemClicked}>
          {game.title}
        </div>
    );
  }
}

export default GameItem
