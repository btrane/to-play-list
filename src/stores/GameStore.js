import initialStore from './index'
import { observable } from 'mobx'

class GameStore {
    @observable games = initialStore.games

    // add game
    addGame(gameToAdd) {
        this.games.push(gameToAdd)
    }

    // delete game
    deleteGame(gameToDelete) {
        this.games = this.games.filter(game => game.id !== gameToDelete.id)
    }

    // toggle complete
    toggleComplete(gameToToggle) {
        this.games.map(game => game.id === gameToToggle.id ? (game.dateCompleted > 0 ? game.dateCompleted = 0 : game.dateCompleted = Date.now()) : game)
    }
}

const gameStore = new GameStore()

export { gameStore }
