import { types } from 'mobx-state-tree'

const Game = types.model({
    id: types.identifierNumber,
    title: types.optional(types.string, ''),
    image: types.optional(types.string, ''),
    timeToBeat: types.optional(types.number, 0),
    dateAdded: types.optional(types.number, 0),
    dateCompleted: types.optional(types.number, 0),
}).actions(self => ({
    toggleComplete() {
        self.dateCompleted > 0 ? self.dateCompleted = 0 : self.dateCompleted = Date.now()
    },
}))

export { Game }
