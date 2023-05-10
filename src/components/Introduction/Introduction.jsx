import React from "react";
import { Fade } from "react-reveal";
import ManHello from "../../assets/lottie/manHello.json";
import emoji from "react-easy-emoji";
import RenderLottie from "../RenderLottie/RenderLottie";
import ProfileIcons from "../ProfileIcons/ProfileIcons";
import "./Introduction.scss";




const Introduction = () => {

    return (

        <Fade bottom duration={1000} distance="40px">
            <div className="introduction-container">
                <div className="about">
                    <h1 className="greeting-text">
                        Hi, I am Rhythm 
                        <span className="wave-emoji">{emoji("👋")}</span>
                    </h1>
                    <p className="greeting-text-p subTitle"> 
                        A passionate Full Stack Developer. I have built projects 
                        that showcase my skills, and I love learning and building 
                        new and innovative technology. I have build applications 
                        with JavaScript, ReactJS, NodeJS, SpringBoot and some other 
                        cool libraries and frameworks. I can design efficient 
                        algorithms which can help in improving the performance
                        of the application.
                        
                    </p>
                    <ProfileIcons />
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