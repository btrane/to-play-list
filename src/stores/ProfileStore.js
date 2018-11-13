import { types } from 'mobx-state-tree'

const Profile = types.model({
    userName: types.optional(types.string, ''),
    completionType: types.optional(types.string, 'MAIN'),
    orderBy: types.optional(types.string, 'DATE'),
})

export { Profile }
