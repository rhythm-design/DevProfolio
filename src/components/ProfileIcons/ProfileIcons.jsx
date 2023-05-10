import React from "react";
import "./ProfileIcons.scss";

const ProfileIcons = () => {
    return(
        <div className="profile-icons-div">
            <a
                href="https://github.com/rhythm-design"
                className="icon-button github"
                target="_blank"
                rel="noopener noreferrer"
            >
                <i class="fa fa-github"></i>
            </a>

            <a
                href="https://leetcode.com/rhythm_varshney/"
                className="icon-button leetcode"
                target="_blank"
                rel="noopener noreferrer"
            >
                <i class="fas fa-code"></i>
                <span></span>
            </a>

            <a
                href="https://www.linkedin.com/in/rhythmvarshney/"
                className="icon-button linkedin"
                target="_blank"
                rel="noopener noreferrer"
            >
                <i className="fab fa-linkedin-in"></i>
            </a>

            <a
                href="mailto:rhythmrv3@gmail.com"
                className="icon-button mail"
                target="_blank"
                rel="noopener noreferrer"
            >
                <i className="fas fa-envelope"></i>
            </a>
            
        </div>
    );
}

export default ProfileIcons;