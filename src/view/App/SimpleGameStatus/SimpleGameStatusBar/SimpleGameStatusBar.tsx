import { getStatusBarStyle, getText } from "./simpleGameStatusHelper"
import './SimpleGameStatus.css'

interface SimpleStatusBarProps {
  state: 'this game is a draw' | 'there is a winner' | 'the game is in progress'
  player: 'X' | 'O'
  winner: 'X' | 'O' | ''
  reset: () => void
}

const SimpleGameStatusBar = ({ state, player, winner, reset }: SimpleStatusBarProps) => {
  return (
    <div className={ `${ getStatusBarStyle(state) } status-bar simple` } >
      <p className="status-bar-text simple">{ getText(state, player, winner) }</p>
      <button onClick={ reset } >Reset</button>
    </div>
  )
}

export default SimpleGameStatusBar

