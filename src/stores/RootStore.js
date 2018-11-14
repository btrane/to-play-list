import { types } from 'mobx-state-tree'
import { values } from 'mobx'
import { Game } from './GameStore'
import { Profile } from './ProfileStore'

const RootStore = types.model({
  games: types.map(Game),
  profile: types.map(Profile),
}).actions(self => ({
  addGame(gameToAdd) {
    self.games.set(gameToAdd.id, Game.create(gameToAdd))
  },
  deleteGame(gameToDelete) {
    self.games.delete(gameToDelete.id)
  },
})).views(self => ({
  get completeGames() {
    return values(self.games).filter(game => game.dateCompleted > 0)
  },
  get incompleteGames() {
    return values(self.games).filter(game => game.dateCompleted === 0)
  },
  get totalTimeIncomplete() {
    let total = 0
    values(self.games).filter(game => game.dateCompleted === 0).map(game => total += game.timeToBeat)
    return total
  },
  get totalTimeComplete () {
    let total = 0
    values(self.games).filter(game => game.dateCompleted > 0).map(game => total += game.timeToBeat)
    return total
  },
}))

export { RootStore }