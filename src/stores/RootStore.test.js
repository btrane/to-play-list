import { RootStore } from './RootStore'
import initialState from './index'

describe('Auth Store Tests', () => {

    const rootStore = RootStore.create(initialState)
    const gameID = Date.now()
    const gameToAdd = { id: gameID, title: 'Mario Party', dateAdded: gameID }

    it('should add a game', () => {
        rootStore.addGame(gameToAdd)
        expect(rootStore.games.get(gameID).title).toBe(gameToAdd.title);
    });

    it('should delete a game', () => {
        rootStore.deleteGame(gameToAdd)
        expect(rootStore.games.get(gameID)).toBe(undefined);
    });

});
