import { types, flow } from 'mobx-state-tree'
import { HowLongToBeatService, HowLongToBeatEntry } from 'howlongtobeat';

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
    updateTimeToBeat: flow(function* updateTimeToBeat() {        
        let hltbService = new HowLongToBeatService()
        let res = yield hltbService.search(self.title)

        if (res && res.length > 0) {
            console.log('hltb result = ', res)
            self.timeToBeat = res[0].gameplayMain
            self.image = res[0].imageUrl
            console.log('Time to beat = ', self.timeToBeat)
        }
    }),
}))

export { Game }
