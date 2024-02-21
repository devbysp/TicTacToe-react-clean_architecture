import withPartialProps from "../../../../common/WithPartialProps";
import WinnerStatusBar from "./WinnerStatusBar/WinnerStatusBar";

export const createWinnerStatusBarAdapter = (winner: 'X' | 'O' | '', reset: () => void) => withPartialProps(WinnerStatusBar, { winner, reset })
