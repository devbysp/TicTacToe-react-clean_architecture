import { Board, Empty, Player } from "../model/GameStateModel"

export const getWinner = (board: Board): Player | Empty => {
  if (board[0] !== '' && board[0] === board[1] && board[1] === board[2]) {
    return board[0]
  }
  if (board[3] !== '' && board[3] === board[4] && board[4] === board[5]) {
    return board[3]
  }
  if (board[6] !== '' && board[6] === board[7] && board[7] === board[8]) {
    return board[6]
  }
  if (board[0] !== '' && board[0] === board[3] && board[3] === board[6]) {
    return board[0]
  }
  if (board[1] !== '' && board[1] === board[4] && board[4] === board[7]) {
    return board[1]
  }
  if (board[2] !== '' && board[2] === board[5] && board[5] === board[8]) {
    return  board[2]
  }
  if (board[0] !== '' && board[0] === board[4] && board[4] === board[8]) {
    return board[0]
  }
  if (board[2] !== '' && board[2] === board[4] && board[4] === board[6]) {
    return board[2]
  }
  return ''
}

export const isADraw = (step: number): boolean =>  {
  return step === 9
}

type GameOverState = 'the game is in progress' | 'there is a winner' | 'this game is a draw'

export const getGameOverState = (board: Board, step: number): GameOverState => {
  if(getWinner(board)) {
    return 'there is a winner'
  }

  if(isADraw(step)) {
    return 'this game is a draw'
  }

  return 'the game is in progress'
}

export const getCurrentUser = (step: number): Player => (step % 2) ? 'O' : 'X'
