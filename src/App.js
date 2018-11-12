import React, { Component } from 'react'
import './App.css'

import GameList from './components/GameList'
import { observer } from 'mobx-react'

@observer
class App extends Component {
  render() {
    const { store } = this.props
    return (
      <div className="App">
        <header className="App-header">
          <h1>
            My To Play List
          </h1>
        </header>
        <GameList store={store} />
      </div>
    );
  }
}

export default App
