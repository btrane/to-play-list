import { types } from 'mobx-state-tree'
import { Game } from './GameStore'
import { Profile } from './ProfileStore'
import initialState from '.';

const RootStore = types.model({
  games: types.map(Game),
  profile: types.map(Profile),
}).actions(self => ({
  addGame(gameToAdd) {
    self.games.set(gameToAdd.id, Game.create(gameToAdd))
  },
  deleteGame(gameToDelete) {
    self.games.delete(gameToDelete.id)
  }
}))

const rootStore = RootStore.create(initialState)

export { rootStore }