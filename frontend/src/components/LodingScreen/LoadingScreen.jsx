import React from "react";
import "./lodingScreen.css";
import Lottie from "react-lottie";
import { animation1 } from "../../assets";

const LoadingScreen = () => {
  return (
    <div className="lodingScreenContainer">
      <div className="lottieImg">
        <Lottie
          options={{
            loop: true,
            autoplay: true,
            animationData: animation1,
            rendererSettings: {
              preserveAspectRatio: "xMidYMid slice",
            },
          }}
        />
      </div>
    </div>
  );
};

export default LoadingScreen;
