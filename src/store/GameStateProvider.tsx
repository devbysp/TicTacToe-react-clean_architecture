import { ReactNode, useReducer } from "react";

import { GameStateContext, GameStateStore  } from "../usecase/GameStateContext";
import reduceGameState, { initialState } from "./GameState";

interface GameStateProviderProps {
  children: ReactNode
}

export const GameStateProvider = ({ children }:  GameStateProviderProps) => {
  const [state, dispatch] = useReducer(reduceGameState, initialState)
  const store: GameStateStore = {
      state,
      actions: {
        next: (index) => { dispatch({ type: 'next', payload: index }) },
        reset: () => { dispatch({ type: 'reset' }) }
      } 
    }

  return (
    <GameStateContext.Provider value={store} >
      { children }
    </GameStateContext.Provider>
  )
}
