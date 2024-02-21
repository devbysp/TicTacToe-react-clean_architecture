import { GameStateModel } from "../model/GameStateModel";
import { getWinner, isADraw } from "./GameOver";

export const next = (state: GameStateModel, index: number): GameStateModel => {
  if(getWinner(state.board) || isADraw(state.step)) {
    return state
  }

  if(state.board[index] !== '') {
    return state
  }

  return {
    board: state.board.map((value, pos) => {
      if(pos === index) {
        return state.step % 2 ? 'O' : 'X'
      }
      return value
    }),
    step: state.step + 1,
  }
} 

export const initialState: GameStateModel = {
  board: ['', '', '', '', '', '', '', '', '' ],
  step: 0
}

