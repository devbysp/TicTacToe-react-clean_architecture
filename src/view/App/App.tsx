import createSimpleGameStatusBar from './SimpleGameStatus/SimpleGameStatus';
import createGameStatusBar from './GameStatus/GameStatus';
import Game from './Game/Game';
import './App.css'

function App() {
  return ( 
    <div className={'app-container'}>
      <Game createStatusBar={createGameStatusBar}/> 
      <Game createStatusBar={createSimpleGameStatusBar}/> 
    </div>
  )
}

export default App;
