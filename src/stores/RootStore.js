import { types, onSnapshot, applySnapshot } from 'mobx-state-tree'
import { values } from 'mobx'
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
})).views(self => ({
  get completeGames() {
    return values(self.games).filter(game => game.dateCompleted > 0)
  },
  get incompleteGames() {
    return values(self.games).filter(game => game.dateCompleted === 0)
  }
}))

const rootStore = RootStore.create(initialState)

if (localStorage.getItem('toPlayStore') !== null) {
  applySnapshot(rootStore, JSON.parse(localStorage.getItem('toPlayStore')))
}

onSnapshot(rootStore, snapshot => {
  localStorage.setItem('toPlayStore', JSON.stringify(snapshot))
  console.log('current snapshot: ', snapshot)
})

export { rootStore }