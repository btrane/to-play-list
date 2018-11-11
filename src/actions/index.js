export const ADD_GAME = 'ADD_GAME'
export const DELETE_GAME = 'DELETE_GAME'
export const TOGGLE_COMPLETE = 'TOGGLE_COMPLETE'

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

