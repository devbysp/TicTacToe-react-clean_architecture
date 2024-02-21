import Cell from "./Cell/Cell"

import "./Board.css"

interface BoardProps {
  board: ('X' | 'O' | '')[],
  mark: (index: number) => void
}

const Board = ({ board, mark }: BoardProps)  => {
  return (
    <div className="board">
      {board.map((value, index) => (
          <Cell key={ index } index={ index } value={ value } mark={ mark } />
       ))}
    </div>
  )
}

export default Board
