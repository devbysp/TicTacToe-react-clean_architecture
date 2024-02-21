import './Cell.css'

interface CellProps {
  index: number
  value: 'X' | 'O' | ''
  mark: (index: number) => void
}

const Cell = ({ index, value, mark }: CellProps) => {
  return (
    <div className="cell"  onClick={ () => mark(index) } >
      <p className="mark">{value}</p>
    </div>
  )
}

export default Cell
