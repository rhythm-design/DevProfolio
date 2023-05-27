import React from "react";
import { proficiencyData } from "../../PortfolioData";
import "./TechProgress.scss";

const TechProgress = () => {
    return (
        <div className="skill-bars-container">
            <div className="skills-bar">
                <h1 className="prof-main-heading">
                    {proficiencyData.heading}
                </h1>
                {
                    proficiencyData.skillsData.map((skillData,index) =>{
                        const progressStyle = {
                            width : skillData.percent 
                        };

                        return (
                            <div className="skill" key={index}>
                                <p>{skillData.name}</p>
                                <div className="meter">
                                    <span style={progressStyle}></span>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
}

export default TechProgress;