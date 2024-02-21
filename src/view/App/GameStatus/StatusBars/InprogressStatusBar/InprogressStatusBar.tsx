interface InprogressStatusBarProps {
  player: 'X' | 'O'
}

const InprogressStatusBar = ({ player }: InprogressStatusBarProps) => {
  return (
    <div className="status-bar classic">
      <p className="status-bar-text classic">Current player: { player }</p>
    </div>
  )
}

export default InprogressStatusBar
