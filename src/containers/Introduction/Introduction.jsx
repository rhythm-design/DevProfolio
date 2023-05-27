import React from "react";
import { Fade } from "react-reveal";
import ManHello from "../../assets/lottie/manHello.json";
import { introduction } from "../../PortfolioData";
import emoji from "react-easy-emoji";
import RenderLottie from "../../components/RenderLottie/RenderLottie";
import ProfileIcons from "../../components/ProfileIcons/ProfileIcons";
import Button from "../../utils/Button/Button";
import "./Introduction.scss";

const Introduction = () => {

    return (
        <Fade bottom duration={1000} distance="40px">
            <div className="introduction-container">
                <div className="about">
                    <h1 className="greeting-text">
                        Hi, I am {introduction.firstName}
                        <span className="wave-emoji">{emoji("👋")}</span>
                    </h1>
                    <p className="greeting-text-p subTitle-intro"> 
                        {introduction.introductionText}
                    </p>
                    <ProfileIcons />
                    <div className="contact-button-div">
                        <Button text={introduction.contactButtonText} href="#contact" />
                        <Button text={introduction.resumeButtonText} href={introduction.resumeLink} newTab={true} />
                    </div>
                </div>
                <div className="lottie-anim" >
                    <div className="man-hello">
                        <RenderLottie animationJSON={ManHello}/>
                    </div>  
                </div>
            </div>
        </Fade>

    );

}

export default Introduction;