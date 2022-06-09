import "../styles/globals.css";
import { AppWrapper } from "../context/state";
import { ParallaxProvider } from "react-scroll-parallax";

function MyApp({ Component, pageProps }) {
  return (
    <AppWrapper>
      <ParallaxProvider>
        <Component {...pageProps} />
      </ParallaxProvider>
    </AppWrapper>
  );
}

export default MyApp;
