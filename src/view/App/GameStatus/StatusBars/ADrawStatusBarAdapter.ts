import withPartialProps from "../../../../common/WithPartialProps";
import ADrawStatusBar from "./ADrawStatusBar/ADrawStatusBar";

export const createADrawStatusBarAdapter = (reset: () => void) => withPartialProps(ADrawStatusBar, { reset })
