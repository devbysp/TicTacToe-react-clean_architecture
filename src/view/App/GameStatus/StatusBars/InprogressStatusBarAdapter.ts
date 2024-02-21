import withPartialProps from "../../../../common/WithPartialProps";
import InprogressStatusBar from "./InprogressStatusBar/InprogressStatusBar";

export const createInprogressStatusBarAdapter = (player: 'X' | 'O') => withPartialProps(InprogressStatusBar, { player })
