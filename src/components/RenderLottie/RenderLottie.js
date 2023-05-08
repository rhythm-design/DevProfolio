import React from "react";
import { useLottie } from "lottie-react";

const RenderLottie = ({animationJSON}) => {
    const options = {
        animationData: animationJSON,
        loop: true
    };

    const { View } = useLottie(options);
    return <>{View}</>
}
export default RenderLottie;