import { GameStateModel } from "../model/GameStateModel";
import { next, initialState } from "../usecase/GameFlow";
export { initialState } from "../usecase/GameFlow";

type Action = { type: string, payload?: any }
type GameStateReducer = (state: GameStateModel, action: Action) => GameStateModel

const reduceGameState: GameStateReducer = (state, action) => {
  switch (action.type) {
    case 'next': 
      return next(state, action.payload)
      
    case 'reset': 
      return initialState
  }
  return state
}

export default reduceGameState
