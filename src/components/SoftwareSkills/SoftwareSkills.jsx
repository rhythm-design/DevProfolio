import React from "react";
import "./SoftwareSkills.scss";

const SoftwareSkills = () => {
    return (
        <div className="software-skills-container">
            <ul className="dev-icons">
                <li className="software-skill-inline">
                    <i className="fab fa-html5"></i>
                    <p>HTML-5</p>
                </li>
                <li className="software-skill-inline">
                    <i className="fab fa-css3-alt"></i>
                    <p>CSS3</p>
                </li>
                <li className="software-skill-inline">
                    <i className="fab fa-sass"></i>
                    <p>sass</p>
                </li>
                <li className="software-skill-inline">
                    <i className="fab fa-java"></i>
                    <p>Java</p>
                </li>
                <li className="software-skill-inline">
                    <i className="fas fa-code"></i>
                    <p>DSA</p>
                </li>
                <li className="software-skill-inline">
                    <i className="fab fa-js"></i>
                    <p>JavaScript</p>
                </li>
                <li className="software-skill-inline">
                    <i className="fab fa-react"></i>
                    <p>ReactJS</p>
                </li>
                <li className="software-skill-inline">
                    <i className="fab fa-node"></i>
                    <p>NodeJS</p>
                </li>
                <li className="software-skill-inline">
                    <i className="fas fa-database"></i>
                    <p>Database</p>
                </li>
                <li className="software-skill-inline">
                    <i className="fab fa-java"></i>
                    <p>SpringBoot</p>
                </li>
                <li className="software-skill-inline">
                    <i className="fab fa-aws"></i>
                    <p>AWS (Basic)</p>
                </li>
                <li className="software-skill-inline">
                    <i className="fas fa-bug"></i>
                    <p>Unit Testing</p>
                </li>
            </ul>
        </div>
    );
}

export default SoftwareSkills;