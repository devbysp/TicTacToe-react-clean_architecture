import { ReactNode } from "react";

import { RootState } from "./store";
import { useAppDispatch, useAppSelector } from "./hooks";

import { GameStateContext, GameStateStore  } from "../usecase/GameStateContext";
import GameState from "./GameState";


interface GameStateProviderProps {
  children: ReactNode
}

export const GameStateProvider = ({ children }:  GameStateProviderProps) => {
  const dispatch = useAppDispatch();

  const boardSelector = (state: RootState) => state.game.board
  const stepSelector = (state: RootState) => state.game.step

  const { next, reset } = GameState.actions

  const store: GameStateStore = {
      state: {
        board: useAppSelector(boardSelector),
        step: useAppSelector(stepSelector)
      },
      actions: {
        next: (index) => { dispatch(next(index)) },
        reset: () => { dispatch(reset()) }
      }
    }

  return (
    <GameStateContext.Provider value={store} >
      { children }
    </GameStateContext.Provider>
  )
}
