import { ADD_GAME, DELETE_GAME, TOGGLE_COMPLETE } from './types'

export const addGame = game => ({
  type: ADD_GAME,
  game
})

export const deleteGame = game => ({
  type: DELETE_GAME,
  game
})

export const toggleComplete = game => ({
  type: TOGGLE_COMPLETE,
  game
})

