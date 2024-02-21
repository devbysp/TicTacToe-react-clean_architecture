import StatusBarFactory from "../Game/StatusBar/StatusBar"

import "./GameStatus.css"
import { createADrawStatusBarAdapter } from "./StatusBars/ADrawStatusBarAdapter"
import { createInprogressStatusBarAdapter } from "./StatusBars/InprogressStatusBarAdapter"
import { createWinnerStatusBarAdapter } from "./StatusBars/WinnerStatusBarAdapter"

const createGameStatusBar: StatusBarFactory = ({ player, winner, state, reset }) => {
  const statusBars = {
    'this game is a draw': createADrawStatusBarAdapter(reset),
    'there is a winner': createWinnerStatusBarAdapter(winner, reset), 
    'the game is in progress': createInprogressStatusBarAdapter(player) 
  }
  return statusBars[state]
  
}

export default createGameStatusBar

