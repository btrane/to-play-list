import initialState from '../stores'
import { ADD_GAME, DELETE_GAME, TOGGLE_COMPLETE } from '../actions'

const games = (state = initialState, action) => {
  switch (action.type) {
    case ADD_GAME:
      return { ...state, games: [{
        id: Date.now(),
        title: action.game.title,
        dateCompleted: 0,
      }, ...state.games]}
    case DELETE_GAME:
      let updatedGames = state.games.filter(game => game !== action.game)
      return { ...state, games: updatedGames }
    case TOGGLE_COMPLETE:
      // copy the array
      updatedGames = state.games.slice()
      // find the game
      let theGame = state.games.filter(game => game.id === action.game.id)[0]
      // set completed time or clear it
      if (theGame.dateCompleted > 0) {
        theGame.dateCompleted = 0
      } else {
        theGame.dateCompleted = Date.now()
      }
      return { ...state, games: updatedGames }
    default:
      return state
  }
}

export default games