import "../styles/globals.css";
import { useState, useEffect } from "react";
import { AppWrapper } from "../context/state";
import { ParallaxProvider } from "react-scroll-parallax";
import { ClimbingBoxLoader } from "react-spinners";

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, Math.random() * 4000);
  }, []);

  return loading ? (
    <div className={"spinner"}>
      <ClimbingBoxLoader color={"#FF4C7A"} loading={true} size={"100%"} />
    </div>
  ) : (
    <AppWrapper>
      <ParallaxProvider>
        <Component {...pageProps} />
      </ParallaxProvider>
    </AppWrapper>
  );
}

export default MyApp;
