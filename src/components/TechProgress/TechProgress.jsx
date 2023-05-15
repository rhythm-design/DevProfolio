import React from "react";
import "./TechProgress.scss";

const TechProgress = () => {
    return (
        <div className="skill-bars-container">
            <div className="skills-bar">
                <h1>
                    Proficiency
                </h1>
                <div className="skill frontend">
                    <p>Frontend</p>
                    <div className="meter">
                        <span style={{width: '80%'}}></span>
                    </div>
                </div>
                <div className="skill backend">
                    <p>Backend</p>
                    <div className="meter">
                        <span style={{width: '60%'}}></span>
                    </div>
                </div>
                <div className="skill java-springboot">
                    <p>Java and SpringBoot</p>
                    <div className="meter">
                        <span style={{width: '80%'}}></span>
                    </div>
                </div>
                <div className="skill programming">
                    <p>Programming and DSA</p>
                    <div className="meter">
                        <span style={{width: '90%'}}></span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TechProgress;