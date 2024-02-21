import "./WinnerStatusBar.css"

interface WinnerStatusBarProps {
  winner: 'X' | 'O' | ''
  reset: () => void
}

const WinnerStatusBar = ({ winner, reset }: WinnerStatusBarProps) => {
  return (
    <div className="winner status-bar classic">
      <p className="status-bar-text classic">Winner: { winner }</p>
      <button onClick={ reset } >Reset</button>
    </div>
  )
}

export default WinnerStatusBar

