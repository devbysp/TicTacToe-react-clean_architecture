import { ComponentType } from "react"

interface StatusBarFactoryProps {
  player: 'X' | 'O' 
  winner: 'X' | 'O' | ''
  state: 'the game is in progress' | 'there is a winner' | 'this game is a draw'
  reset: () => void
}

type StatusBarFactory = ({ player, winner, state, reset }: StatusBarFactoryProps) => ComponentType

export default StatusBarFactory
