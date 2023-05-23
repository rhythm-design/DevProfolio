import React from "react";
import emoji from "react-easy-emoji";
import { Fade } from "react-reveal";

import ManProgramming from "../../assets/lottie/man-programming.json";
import RenderLottie from "../../components/RenderLottie/RenderLottie";
import SoftwareSkills from "../../components/SoftwareSkills/SoftwareSkills";
import "./Skills.scss";

const Skills = () =>{
    
    return (
        <div id="skills" className="skills-container">
            <div className="skills-lottie-anim">
                <Fade left duration={1000}>
                    <RenderLottie animationJSON={ManProgramming} />
                </Fade>
            </div>

            <Fade right duration={1000} > 
                <div className="skills-text-container">
                    <h1 className="skills-heading">
                        What I do
                    </h1>
                    <h3 className="skills-subheading">
                        FULL STACK DEVELOPER WHO WANT TO EXPLORE AND BECOME 
                        BEST IN EVERY TECH STACK
                    </h3>

                    <SoftwareSkills />

                    <ul className="skills-list">
                        <li>
                            {emoji("⚡ Develop highly interactive FrontEnd / User Interface for you web and mobile applications.")}
                        </li>
                        <li>
                            {emoji("⚡ Design time and space efficient algorithms to improve the application performance for best user Experience.")} 
                        </li>
                        <li>
                            {emoji("⚡ Integeration of third party services such as Firebase")}
                            
                        </li>
                    </ul>
                </div>
            </Fade>
        </div>
    );
}

export default Skills;