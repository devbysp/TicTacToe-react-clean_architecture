export type Player = 'X' | 'O'
export type Empty = ''

export type Board = (Player | Empty) []

export interface GameStateModel {
  board: Board
  step: number
}
