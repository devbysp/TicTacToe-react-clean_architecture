import withPartialProps from "../../../common/WithPartialProps"
import StatusBarFactory from "../Game/StatusBar/StatusBar"

import './SimpleGameStatus.css'
import SimpleGameStatusBar from "./SimpleGameStatusBar/SimpleGameStatusBar"


const createSimpleGameStatusBar: StatusBarFactory = ({ player, winner, state, reset }) => (
  withPartialProps(SimpleGameStatusBar, { player, winner, state, reset })
)

export default createSimpleGameStatusBar

