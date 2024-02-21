import "./ADrawStatusBar.css"

interface ADrawStatusBarProps {
  reset: () => void
}

const ADrawStatusBar = ({ reset }: ADrawStatusBarProps) => {
  return (
    <div className="adraw status-bar classic">
      <p className="status-bar-text classic">A draw</p>
      <button onClick={ reset } >Reset</button>
    </div>
  )
}

export default ADrawStatusBar


