import React from "react";
import { skillsToShow } from "../../PortfolioData";
import "./SoftwareSkills.scss";

const SoftwareSkills = () => {
    return (
        <div className="software-skills-container">
            <ul className="dev-icons">
                {
                    skillsToShow.softwareSkillsIcons.map((skill,index) => 
                        <li className="software-skill-inline" key={index}>
                            <i className={skill.fontAwesomeIcon}></i>
                            <p>{skill.name}</p>
                        </li>
                    )
                }
            </ul>
        </div>
    );
}

export default SoftwareSkills;