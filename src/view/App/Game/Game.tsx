import { useGameActions, useGameState } from '../../../usecase/GameStateContext';

import Title from './Title/Title';
import Board from './Board/Board';
import StatusBarFactory from './StatusBar/StatusBar';

interface GameProps {
  createStatusBar: StatusBarFactory
}

const Game = ({ createStatusBar }: GameProps) => {
  const { next, reset } = useGameActions();
  const { board, state, winner, currentPlayer } = useGameState();
  const StatusBar = createStatusBar({ player: currentPlayer, winner, state, reset })

  return (
    <div className={'game'}>
      <Title />
      <Board board={ board } mark={ next } /> 
      <StatusBar />
    </div>
  )
}

export default Game
