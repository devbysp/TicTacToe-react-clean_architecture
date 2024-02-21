import { createContext, useContext } from "react";

import { Actions } from "./Actions";
import { GameStateModel } from "../model/GameStateModel";
import { getCurrentUser, getGameOverState, getWinner } from "./GameOver";

export interface GameStateStore  {
  state: GameStateModel
  actions: Actions
}

export const GameStateContext = createContext<GameStateStore>({} as GameStateStore)

export const useGameState = () => {
  const { state } = useContext(GameStateContext)
  return {
    ...state,

    // derived states
    state: getGameOverState(state.board, state.step),
    winner: getWinner(state.board),
    currentPlayer: getCurrentUser(state.step),
  }
}

export const useGameActions = (): Actions => {
  const { actions } = useContext(GameStateContext)
  return actions
}
