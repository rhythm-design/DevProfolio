import React from "react";
import "./SplashScreen.scss";
import RenderLottie from "../../components/RenderLottie/RenderLottie";
import SplashScreenLottie from "../../assets/lottie/SplashScreen.json";

const SplashScreen = () => {
    return (
        <div className="splash-container">
          <div className="splash-animation-container">
            <RenderLottie animationJSON={SplashScreenLottie} />
          </div>
          <div className="splash-title-container">
            <span className="brackets"> &lt;</span>
            <span className="splash-title">Rhythm</span>
            <span className="brackets">/&gt;</span>
          </div>
        </div>
    );
}

export default SplashScreen;





// import React, {useContext} from "react";
// import "./SplashScreen.css";
// import DisplayLottie from "../../components/displayLottie/DisplayLottie";
// import {greeting, splashScreen} from "../../portfolio";
// import StyleContext from "../../contexts/StyleContext";

// export default function SplashScreen() {
//   const {isDark} = useContext(StyleContext);
//   return (
//     <div className={isDark ? "dark-mode splash-container" : "splash-container"}>
//       <div className="splash-animation-container">
//         <DisplayLottie animationData={splashScreen.animation} />
//       </div>
//       <div className="splash-title-container">
//         <span className="grey-color"> &lt;</span>
//         <span className="splash-title">{greeting.username}</span>
//         <span className="grey-color">/&gt;</span>
//       </div>
//     </div>
//   );
// }